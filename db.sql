CREATE DATABASE `NotesDB`;
USE  `NotesDB`;
CREATE TABLE `notes` (
	`id` INT(30) NOT NULL AUTO_INCREMENT,
	`nombre` VARCHAR(50) NOT NULL,
	`nota1` INT(3) NOT NULL,
	`nota2` INT(3) NOT NULL,
	`nota3` INT(3) NOT NULL,
	`nota4` INT(3) NOT NULL,
	`promedio` INT(3) NOT NULL,
	`fecha_creacion` VARCHAR(100) NOT NULL,
	PRIMARY KEY (`id`)
);

INSERT INTO `notes` (`nombre`, `nota1`, `nota2`, `nota3`, `nota4`, `promedio`, `fecha_creacion`) VALUES ('1', 100, 100, 100, 100, 100, '12/11/2021 2:07:54 p. m.');

INSERT INTO `notes` (`nombre`, `nota1`, `nota2`, `nota3`, `nota4`, `promedio`, `fecha_creacion`) VALUES ('algun nombre', 100, 100, 100, 100, 100, '12/11/2021 2:07:54 p. m.');
