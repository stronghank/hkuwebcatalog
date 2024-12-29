/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
/* eslint-disable global-require */
/* eslint-disable consistent-return */
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
    trustServerCertificate: true
  }
};


export default async (req:any, res:any) => {
  try {
    const pool = new ConnectionPool(config as any);
    await pool.connect();
    console.log(req);
    const result = await pool.query`SELECT * FROM collection`;

    res.status(200).json(result.recordset);
  } catch (err: any) {
    res.status(500).send(err.message);
    console.log(err.message);
  }
  /*
  const sampleData = [
    {
      Id: 1,
      Title:
        "Health reforms to enhance the public's choices for nutritious content care in urban areas",
      Journal: 'Family Practice',
      DataSource: 'Cross-sectional Study',
      Year: 2017,
      SampleSize: 1248,
      PrincipalInvestigator: 'T.P. Lam',
      PIDepartment: 'Department of Family Medicine and Primary Care',
      DOI: 'https://doi.org/10.1093/fampra/cmx033',
    },
    {
      Id: 2,
      Title:
        'Differences in antibiotic use between patients with and without a typical doctor in Hong Kong',
      Journal: 'BMC Pharmacology and Toxicology',
      DataSource: 'Cross-sectional Study',
      Year: 2015,
      SampleSize: 271,
      PrincipalInvestigator: 'T.P. Lam',
      PIDepartment: 'Department of Family Medicine and Primary Care',
      DOI: 'https://doi.org/10.1186/s40545-015-0043-6',
    },
  ];

  res.status(200).json(sampleData); */

};