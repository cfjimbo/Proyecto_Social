CREATE DATABASE `social_login`;

CREATE TABLE cuenta_user(
idcuenta int primary key not null,
nombre varchar (25),
apellido varchar (25),
usuario varchar (25),
contrasena varchar (25),
email varchar (25));

SELECT * FROM cuenta_user;

INSERT INTO cuenta_user (nombre, apellido, usuario, contrasena, email) VALUES ('Christian', 'Jimbo', 'cfjimbo', 'hola1234', 'cfjimbo@gmail,com');
INSERT INTO cuenta_user (nombre, apellido, usuario, contrasena, email) VALUES ('Juan', 'Cevallos', 'jcevallos', 'adios1234', 'jcevallos@gmail.com');
