export default function handler(req: any, res: any) {
  const { id } = req.query;
  console.log(`You requested collection with id: ${id}`);
  let sampleData = {};
  if (id === '1') {
    sampleData = {
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
      Abstract:
        'Literature shows that continuity of care from a primary care physician is associated with better patient satisfaction and preventive care. This may also have an effect on patients’ use of antibiotics. This study investigated the differences in antibiotic use between patients with and without a regular doctor in a pluralistic health care system.MethodsA cross-sectional telephone questionnaire survey using randomly selected household phone numbers was conducted in Hong Kong. Several key areas about antibiotic use were compared between the respondents with a regular doctor and those without.ResultsThe response rate was 68.3 %. Of the 2,471 respondents, 1,450 (58.7 %) had a regular doctor, 942 (38.1 %) without, and 79 (3.2 %) did not give a clear answer. The respondents with a regular doctor were more likely to report that they always finished the full course of antibiotics (74.2 % vs 62.4 %), as well as using antibiotics for their last upper respiratory tract infections (17.4 % vs 10.1 %). The association with antibiotic use remained significant in the multivariable logistic regression analysis after adjusting for other confounding factors (P < 0.001, OR = 1.76, 95 % CI:(1.27, 2.48)).ConclusionsWhile patients with a regular doctor, compared to those without, were more likely to report finishing the full course of antibiotics, they also had nearly twice the chance of reporting antibiotic use for upper respiratory tract infections. This challenges the common belief of the benefits in having a regular doctor.',
    };
  } else if (id === '2') {
    sampleData = {
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
      Abstract:
        'Literature shows that continuity of care from a primary care physician is associated with better patient satisfaction and preventive care. This may also have an effect on patients’ use of antibiotics. This study investigated the differences in antibiotic use between patients with and without a regular doctor in a pluralistic health care system.MethodsA cross-sectional telephone questionnaire survey using randomly selected household phone numbers was conducted in Hong Kong. Several key areas about antibiotic use were compared between the respondents with a regular doctor and those without.ResultsThe response rate was 68.3 %. Of the 2,471 respondents, 1,450 (58.7 %) had a regular doctor, 942 (38.1 %) without, and 79 (3.2 %) did not give a clear answer. The respondents with a regular doctor were more likely to report that they always finished the full course of antibiotics (74.2 % vs 62.4 %), as well as using antibiotics for their last upper respiratory tract infections (17.4 % vs 10.1 %). The association with antibiotic use remained significant in the multivariable logistic regression analysis after adjusting for other confounding factors (P < 0.001, OR = 1.76, 95 % CI:(1.27, 2.48)).ConclusionsWhile patients with a regular doctor, compared to those without, were more likely to report finishing the full course of antibiotics, they also had nearly twice the chance of reporting antibiotic use for upper respiratory tract infections. This challenges the common belief of the benefits in having a regular doctor.',
    };
  }
  res.status(200).json(sampleData);
}
