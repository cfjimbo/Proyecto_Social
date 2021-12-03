-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema social_login
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema social_login
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `social_login` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `social_login` ;

-- -----------------------------------------------------
-- Table `social_login`.`carrera`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `social_login`.`carrera` (
  `idcarrera` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcarrera`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `social_login`.`estudiante`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `social_login`.`estudiante` (
  `idcuenta` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(25) NOT NULL,
  `apellido` VARCHAR(25) NOT NULL,
  `usuario` VARCHAR(25) NOT NULL,
  `contrasena` VARCHAR(25) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `token` VARCHAR(100) NULL DEFAULT NULL,
  `modalidad` VARCHAR(45) NULL DEFAULT NULL,
  `carrera_idcarrera` INT NOT NULL,
  PRIMARY KEY (`idcuenta`),
  UNIQUE INDEX `usuario_UNIQUE` (`usuario` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  INDEX `fk_estudiante_carrera1_idx` (`carrera_idcarrera` ASC) VISIBLE,
  CONSTRAINT `fk_estudiante_carrera1`
    FOREIGN KEY (`carrera_idcarrera`)
    REFERENCES `social_login`.`carrera` (`idcarrera`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 70
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `social_login`.`publicacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `social_login`.`publicacion` (
  `idpublicacion` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(250) NOT NULL,
  `descripcion` VARCHAR(500) NOT NULL,
  `idEstudiante` INT NULL DEFAULT NULL,
  `img` VARCHAR(250) NULL DEFAULT NULL,
  PRIMARY KEY (`idpublicacion`),
  INDEX `idEstudiante_idx` (`idEstudiante` ASC) VISIBLE,
  CONSTRAINT `idEstudiante`
    FOREIGN KEY (`idEstudiante`)
    REFERENCES `social_login`.`estudiante` (`idcuenta`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;