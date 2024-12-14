import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req);
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

  res.status(200).json(sampleData);
}
