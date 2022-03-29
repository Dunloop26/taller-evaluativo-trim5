-- Creación de base de datos
CREATE DATABASE IF NOT EXISTS taller_evaluativo;
USE taller_evaluativo;

-- Creación de usuario

CREATE USER IF NOT EXISTS 'eval'@'localhost' IDENTIFIED WITH caching_sha2_password BY '1234';
GRANT ALL PRIVILEGES ON  taller_evaluativo.* TO 'eval'@'localhost';

-- Creación de tablas

CREATE TABLE IF NOT EXISTS productos(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(160),
	precio INT
);

CREATE TABLE IF NOT EXISTS usuarios(
	correo VARCHAR(120) PRIMARY KEY NOT NULL,
	nombres VARCHAR(120),
	apellidos VARCHAR(120),
	password VARCHAR(128)
);

CREATE TABLE IF NOT EXISTS informe_actualizaciones(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	correo_autor VARCHAR(120) NOT NULL,
	id_producto INT NOT NULL
);

-- Creación de relaciones

ALTER TABLE informe_actualizaciones
ADD FOREIGN KEY `fk_informe_correoautor_usuarios_correo`(correo_autor)
REFERENCES usuarios(correo),
ADD FOREIGN KEY `fk_informe_idproducto_productos_id`(id_producto)
REFERENCES productos(id);
