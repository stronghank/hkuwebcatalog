-- Create Schema hkuwebcatalog
CREATE SCHEMA `hkuwebcatalog` ;

-- Create Table collection in MSSQL
CREATE TABLE [collection] (
  [Id] INT NOT NULL IDENTITY(1,1),
  [Index] INT NULL,
  [Journal] VARCHAR(MAX) NULL,
  [Title] VARCHAR(MAX) NOT NULL,
  [Year] INT NULL,
  [Abstract] VARCHAR(MAX) NULL,
  [PrincipalInvestigator] VARCHAR(100) NULL,
  [PIDepartment] VARCHAR(100) NULL,
  [PIRemarks] VARCHAR(50) NULL,
  [DataSource] VARCHAR(255) NULL,
  [Population] VARCHAR(max) NULL,
  [SampleSize] VARCHAR(255) NULL,
  [Remark] VARCHAR(255) NULL,
  [DOI] VARCHAR(100) NULL,
  [Authors] VARCHAR(255) NULL,
  [Status] VARCHAR(45) NULL,
  [CreateDt] DATETIME NULL,
  [LastModifyDt] DATETIME NULL,
  [CreatedBy] VARCHAR(100) NULL,
  PRIMARY KEY ([Id]),
  UNIQUE ([Id])
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


