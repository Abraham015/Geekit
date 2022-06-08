CREATE DATABASE geekit;

CREATE TABLE cliente
(
  idcliente serial not null primary key,
  nombreCliente varchar
(100),
  nicknameCliente varchar
(45),
  fechaNacimiento DATE,
  fotoPerfil VARCHAR
(45),
  direccion varchar
(100),
  contrasena varchar
(45)
);

INSERT INTO cliente
  (nombreCliente,nicknameCliente,fechaNacimiento,fotoPerfil,direccion,contrasena)
VALUES
  ('admin', 'admin', '2022-06-06', 'prueba', 'localhost', 'admin');