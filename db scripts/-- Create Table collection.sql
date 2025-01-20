-- Create Table collection
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