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
    console.log(res);
    console.log(req.body);

    const pool = new ConnectionPool(config as any);
    await pool.connect();
  } catch (err: any) {
    console.log(err);
  }
};
