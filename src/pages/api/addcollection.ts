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
  if (req.method === 'POST') {
    console.log(req.body);
    try {
      const {
        principalInvestigator,
        piDepartment,
        title,
        year,
        authors,
        journal,
        dataSource,
        sampleSize,
        doi,
        abstract,
      } = req.body;

      // Validate input
      if (
        typeof principalInvestigator !== 'string' ||
        typeof piDepartment !== 'string' ||
        typeof title !== 'string' ||
        typeof year !== 'number' ||
        typeof journal !== 'string' ||
        typeof dataSource !== 'string' ||
        typeof sampleSize !== 'number' ||
        typeof doi !== 'string'
      ) {
        return res.status(400).json({ message: 'Invalid input' });
      }

      // Connect to the database
      await sql.connect(config as any);
      const ps = new sql.PreparedStatement();
      ps.input('principalInvestigator', sql.VarChar);
      ps.input('piDepartment', sql.VarChar);
      ps.input('title', sql.VarChar);
      ps.input('year', sql.Int);
      ps.input('authors', sql.NVarChar); // Using NVarChar for JSON string
      ps.input('journal', sql.VarChar);
      ps.input('dataSource', sql.VarChar);
      ps.input('sampleSize', sql.Int);
      ps.input('doi', sql.VarChar);
      ps.input('abstract', sql.VarChar);

      await ps.prepare(`
        INSERT INTO collection (principalInvestigator, piDepartment, title, year, authors, journal, dataSource, sampleSize, doi, abstract)
        VALUES (@principalInvestigator, @piDepartment, @title, @year, @authors, @journal, @dataSource, @sampleSize, @doi, @abstract)
      `);

      // Execute the statement with actual values
      await ps.execute({
        principalInvestigator,
        piDepartment,
        title,
        year,
        authors: JSON.stringify(authors), // Store authors as a JSON string
        journal,
        dataSource,
        sampleSize,
        doi,
        abstract,
      });

      return res.status(201).json({ message: 'Research entry created' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
