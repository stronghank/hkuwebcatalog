import sql from 'mssql';
import type { NextApiRequest, NextApiResponse } from 'next';

interface Config {
  user: string | undefined;
  password: string | undefined;
  server: string | undefined;
  database: string | undefined;
  options: {
    encrypt: boolean;
    trustServerCertificate: boolean;
  };
}

const config: Config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;

  console.log(`You requested collection with id: ${id}`);

  try {
    // Create a new connection pool
    const pool = await sql.connect(config as any);

    // Create a new request from the pool
    const result = await pool
      .request()
      .input('id', sql.Int, id)
      .query('SELECT * FROM collection WHERE id = @id');

    // Check if any records were found
    if (result.recordset.length === 0) {
      return res.status(404).json({ message: 'Collection not found' });
    }

    return res.status(200).json(result.recordset);
  } catch (err: any) {
    console.log(err.message);
    return res.status(500).send(err.message);
  }
}
