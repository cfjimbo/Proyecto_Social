CREATE DATABASE `social_login`;

CREATE TABLE estudiante(
idcuenta int primary key not null,
nombre varchar (25),
apellido varchar (25),
usuario varchar (25),
contrasena varchar (25),
email varchar (25));

SELECT * FROM estudiante;

INSERT INTO estudiante (nombre, apellido, usuario, contrasena, email) VALUES ('Christian', 'Jimbo', 'cfjimbo', 'hola1234', 'cfjimbo@gmail,com');
INSERT INTO estudiante (nombre, apellido, usuario, contrasena, email) VALUES ('Juan', 'Cevallos', 'jcevallos', 'adios1234', 'jcevallos@gmail.com');
