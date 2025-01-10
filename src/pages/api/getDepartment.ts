/* eslint-disable import/no-anonymous-default-export */
import { ConnectionPool } from 'mssql';

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

export default async (req: any, res: any) => {
  try {
    const pool = new ConnectionPool(config as any);
    await pool.connect();
    console.log(req.body);
    const result = await pool.query`SELECT * FROM department`;
    return res.status(200).json(result.recordset);
  } catch (err: any) {
    console.log(err.message);
    return res.status(500).send(err.message);
  }
};
