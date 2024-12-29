-- SQLite
-- Run the following SQL commands to create the schema and table in SQLite

-- Create Table collection in SQLite
CREATE TABLE collection (
  Id INTEGER PRIMARY KEY AUTOINCREMENT,
  Title TEXT NOT NULL,
  Journal TEXT,
  DataSource TEXT,
  Year INTEGER,
  SampleSize INTEGER,
  PrincipalInvestigator TEXT,
  PIDepartment TEXT,
  DOI TEXT,
  Abstract TEXT,
  Authors TEXT,
  Remark TEXT,
  Status TEXT,
  CreateDt DATETIME,
  LastModifyDt DATETIME,
  CreatedBy TEXT
);

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