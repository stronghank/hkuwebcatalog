-- Create Table collection in MSSQL
CREATE TABLE collection (
  Id INT PRIMARY KEY IDENTITY(1,1),
  Title NVARCHAR(255) NOT NULL,
  Journal NVARCHAR(255),
  DataSource NVARCHAR(255),
  Year INT,
  SampleSize INT,
  PrincipalInvestigator NVARCHAR(255),
  PIDepartment NVARCHAR(255),
  DOI NVARCHAR(255),
  Abstract NVARCHAR(MAX),
  Authors NVARCHAR(MAX),
  Remark NVARCHAR(MAX),
  Status NVARCHAR(50),
  CreateDt DATETIME,
  LastModifyDt DATETIME,
  CreatedBy NVARCHAR(50)
);

-- Create Table department
CREATE TABLE department (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    ShortName NVARCHAR(50) NULL,
    Remarks NVARCHAR(255) NULL
);

-- Insert inital data
INSERT INTO [dbo].[department] ([Name], [ShortName], [Remarks])
VALUES
    ('Department of Anaesthesiology', '', ''),
    ('Department of Diagnostic Radiology', '', ''),
    ('Department of Emergency Medicine', '', ''),
    ('Department of Family Medicine & Primary Care', '', ''),
    ('Department of Medicine', '', ''),
    ('Department of Microbiology', '', ''),
    ('Department of Obstetrics & Gynaecology', '', ''),
    ('Department of Ophthalmology', '', ''),
    ('Department of Orthopaedic & Traumatology', '', ''),
    ('Department of Paediatrics & Adolescence Medicine', '', ''),
    ('Department of Pathology', '', ''),
    ('Department of Pharmacology and Pharmacy', '', ''),
    ('Department of Psychiatry', '', ''),
    ('Department of Surgery', '', ''),
    ('School of Biomedical Sciences', '', ''),
    ('School of Chinese Medicine', '', ''),
    ('School of Nursing', '', ''),
    ('School of Public Health', '', '');
