-- Create Schema hkuwebcatalog
CREATE SCHEMA `hkuwebcatalog` ;

-- Create Table collection
CREATE TABLE `hkuwebcatalog`.`collection` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Title` VARCHAR(255) NOT NULL,
  `Journal` VARCHAR(100) NULL,
  `DataSource` VARCHAR(100) NULL,
  `Year` INT NULL,
  `SampleSize` INT NULL,
  `PrincipalInvestigator` VARCHAR(100) NULL,
  `PIDepartment` VARCHAR(100) NULL,
  `DOI` VARCHAR(100) NULL,
  `Abstract` TINYTEXT NULL,
  `Authors` VARCHAR(255) NULL,
  `Remark` VARCHAR(100) NULL,
  `Status` VARCHAR(45) NULL,
  `CreateDt` DATETIME NULL,
  `LastModifyDt` DATETIME NULL,
  `CreatedBy` VARCHAR(100) NULL,
  PRIMARY KEY (`Id`),
  UNIQUE INDEX `Id_UNIQUE` (`Id` ASC) VISIBLE);


