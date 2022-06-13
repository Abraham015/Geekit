CREATE DATABASE geekit;
/*Tabla del cliente*/
CREATE TABLE cliente
(
  idcliente serial not null primary key,
  nombreCliente varchar(100),
  nicknameCliente varchar(45),
  fechaNacimiento DATE,
  fotoPerfil varchar(300),
  direccion varchar(100),
  contrasena varchar(45),
  correo varchar(100),
  descripcion varchar(300)
);

/*Vendedor*/
CREATE TABLE vendedor
(
  idvendedor serial not null primary key,
  nombreVendedor varchar(45) not null,
  fechaUnio date not null,
  categoria varchar(200) not null,
  tipoVendedor varchar(60) not null,
  calificacion float not null,
  certificacion int not null,
  nicknameVendedor varchar(45) not null,
  fotoVendedor varchar(200) not null,
  correo varchar(100),
  contrasena varchar(45),
  descripcion varchar(300)
);

/*Administrador*/
CREATE TABLE administrador
(
  idadministrador serial not null primary key,
  contrasenaadmin varchar(45) not null,
  nombreAdmin varchar(45) not null,
  emailAdmin varchar(45) not null,
  nicknameAdmin varchar(45) not null,
  fechaNacimientoAdmin date not null,
  fotoAdmin varchar(200),
  descripcion varchar(300)
);

/*efectivo*/
CREATE TABLE efectivo
(
  idmetodoPago int not null primary key
);

/*Foro*/
CREATE TABLE foro
(
  idforo serial not null primary key,
  norma varchar(450) not null,
  fotoPortada varchar(300) not null,
  nombreFoto varchar(200) not null,
  descripcion varchar(1000) not null
);

/*Tabla Venta*/
CREATE TABLE venta
(
  numPedido int not null primary key,
  fechaPedido date,
  fechaEntrega date,
  costoTotal float,
  direccionEntrega varchar(100),
  idcliente int REFERENCES cliente(idcliente)
  /*Para hacer la relación entre tablas*/
);

/*Metodo de Pago*/
CREATE TABLE metodoPago
(
  cantidadPago float,
  idmetodoPago int REFERENCES efectivo(idmetodoPago)
  /*Para hacer la relación entre tablas*/
);

/*tarjeta*/
CREATE TABLE tarjeta
(
  numTarjeta varchar(20),
  fechaCaducidad date,
  nombreTarjeta varchar(45),
  codigoSeguridad int,
  idmetodoPago int REFERENCES efectivo(idmetodoPago)
  /*Para hacer la relación entre tablas*/
);

/*Producto*/
CREATE TABLE producto
(
  idProducto SERIAL not null primary key,
  nombreProducto varchar(60) not null,
  precio float not null,
  etiqueta varchar(80) not null,
  descripcion varchar(200) not null,
  metodoEntrega varchar(45) not null,
  fotosProducto varchar(1000) not null,
  stock int not null,
  idvendedor int REFERENCES vendedor(idvendedor)
  /*Para hacer la relación entre tablas*/
);

/*venta_has_producto*/
CREATE TABLE venta_has_producto
(
  cantProducto int,
  numPedido int REFERENCES venta(numPedido),
  idmetodoPago int REFERENCES efectivo(idmetodoPago)
  /*Para hacer la relación entre tablas*/
);

/*foro_has_cliente*/
CREATE TABLE foro_has_cliente
(
  creador BOOLEAN not null,
  idcliente int REFERENCES cliente(idcliente),
  idforo int REFERENCES foro(idforo)
);

/*foro_has_vendedor*/
CREATE TABLE foro_has_vendedor
(
  idvendedor int REFERENCES vendedor(idvendedor),
  idforo int REFERENCES foro(idforo)
);

/*Discusion*/
CREATE TABLE discusion
(
  iddiscusion SERIAL not null primary key,
  fechaDiscusion timestamp without time zone not null,
  reaccionLike int not null,
  reaccionDislike int not null,
  reaccionComent int not null,
  fotoDiscusion varchar(2000),
  contenido varchar(200) not null,
  idcliente int REFERENCES cliente(idcliente),
  idforo int REFERENCES foro(idforo)
);

/*Comentario*/
CREATE TABLE comentario
(
  idcomentario SERIAL not null primary key,
  fechaComentario timestamp without time zone not null,
  reaccionLike int not null,
  reaccionDislike int not null,
  reaccionComent int not null,
  contenidoComentario varchar(200) not null,
  fotoComentario varchar(2000),
  iddiscusion int REFERENCES discusion(iddiscusion),
  idcliente int REFERENCES cliente(idcliente),
  idvendedor int REFERENCES vendedor(idvendedor)
);

/*Comentario_has_comentario*/
CREATE TABLE comentario_has_comentario
(
  idcomentarioPadre int not null REFERENCES comentario(idcomentario),
  idcomentarioHijo int not null REFERENCES comentario(idcomentario)
);

/*reporteContenido*/
CREATE TABLE reporteContenido
(
  idreporteContenido SERIAL not null primary key,
  contenidoReportado varchar(45) not null,
  motivo varchar(100) not null,
  idforo int REFERENCES foro(idforo),
  idcomentario int REFERENCES comentario(idcomentario),
  iddiscusion int REFERENCES discusion(iddiscusion)
);

/*administrador_has_reporteContenido*/
CREATE TABLE administrador_has_reporteContenido
(
  idadministrador int REFERENCES administrador(idadministrador),
  idreporteContenido int REFERENCES reporteContenido(idreporteContenido)
);


/*Valores de prueba para el login*/
INSERT INTO cliente
  (nombreCliente,nicknameCliente,fechaNacimiento,fotoPerfil,direccion,contrasena, descripcion)
VALUES
  ('Abraham Hernandez', 'Abis015', '2022-03-15', 'https://res.cloudinary.com/geekit/image/upload/v1654968148/clientes_fotos/foto-perfil-psicologo-180x180_zfaypi.webp', 'localhost', 'prueba123', 'Me gusta el vino tinto y un buen queso');

INSERT INTO cliente
  (nombreCliente,nicknameCliente,fechaNacimiento,fotoPerfil,direccion,contrasena, descripcion)
VALUES
  ('Alfredo Martínez', 'algred', '2022-03-15', 'https://res.cloudinary.com/geekit/image/upload/v1654968119/clientes_fotos/perfil-1024x754_szwke1.jpg', 'localhost', 'hola12345', 'Me gusta el pan y una buena botana');


/* Valores de prueba para el foros */
insert into foro
  (norma, fotoPortada, nombreFoto, descripcion)
values
  ('No dirás groserías;No provoques a la gente','https://res.cloudinary.com/geekit/image/upload/v1654965681/foro_photos/fma_aiqoc8.jpg','FullMetal Alchemist salvó mi vida','Esto es un foro cristiano');

insert into foro
  (norma, fotoPortada, nombreFoto, descripcion)
values
  ('No dirás groserías (no muchas);No golpearás a la gente','https://res.cloudinary.com/geekit/image/upload/v1654973896/foro_photos/images_cszeaa.jpg','El eterno resplandor de un mundo sin naturo','Foro donde nos imaginamos cómo sería vivir en un mundo sin Naruto.');

insert into foro_has_cliente
  (creador, idcliente, idforo)
values
  (TRUE, '1', '1');

insert into foro_has_cliente
  (creador, idcliente, idforo)
values
  (FALSE, '2', '1');

insert into foro_has_cliente
  (creador, idcliente, idforo)
values
  (TRUE, '1', '2');

insert into foro_has_cliente
  (creador, idcliente, idforo)
values
  (FALSE, '2', '2');

/*insertar para vendedor*/
INSERT INTO vendedor 
  (idvendedor, nombreVendedor, fechaUnio, categoria, tipoVendedor, calificacion,certificacion,nicknameVendedor,fotoVendedor, correo, contrasena)
VALUES
  ('1','Gloria Olivares', '2022-01-22','peluches','individual',4.8,5,'Gloris01','blabla','blabla@example.com','12345');

/*insertar para producto*/
INSERT INTO producto
  (idProducto, nombreProducto, precio, etiqueta, descripcion, metodoEntrega, fotosProducto, stock, idvendedor)
VALUES
  (1, 'Peluche Pikachu',500.50,'#Usado #Original', 'Peluche pikachu tamaño mediano, original de Pokemon', 'A domicilio', 'blablabla', 3,'1');
  insert into foro_has_cliente
  (creador, idcliente, idforo)
values
  (TRUE, '1', '2');

insert into foro_has_cliente
  (creador, idcliente, idforo)
values
  (FALSE, '2', '2');

/* Valores de prueba para discusiones */
insert into discusion
  (fechaDiscusion, reaccionLike, reaccionDislike, reaccionComent, fotoDiscusion, contenido, idcliente, idforo)
values
  ('2020-03-15', '150', '10', '305', 'https://res.cloudinary.com/geekit/image/upload/v1654997704/discusiones_fotos/princesaDeZora_ihbsdl.png;https://res.cloudinary.com/geekit/image/upload/v1654997702/discusiones_fotos/fma_2003_acivmn.webp;https://res.cloudinary.com/geekit/image/upload/v1654997700/discusiones_fotos/ernesto_uvseea.jpg', 'Hola, soy un cliente de la plataforma, quiero saber si puedo hacer una consulta sobre el producto que quiero comprar', '2', '2');

insert into discusion
  (fechaDiscusion, reaccionLike, reaccionDislike, reaccionComent, fotoDiscusion, contenido, idcliente, idforo)
values
  ('2021-03-15', '150', '10', '15', 'https://res.cloudinary.com/geekit/image/upload/v1654997700/discusiones_fotos/ernesto_uvseea.jpg', 'Hola', '2', '2');


/* Todos los valores de prueba para comentarios*/

insert into comentario
  (fechaComentario, reaccionLike, reaccionDislike, reaccionComent, contenidoComentario, fotoComentario, iddiscusion, idcliente)
  values
  ('2020-03-15', '150', '10', '305', 'Hola, soy un cliente de la plataforma, quiero saber si puedo hacer una consulta sobre el producto que quiero comprar', 'https://res.cloudinary.com/geekit/image/upload/v1654997700/discusiones_fotos/ernesto_uvseea.jpg', '1', '2');

insert into comentario
  (fechaComentario, reaccionLike, reaccionDislike, reaccionComent, contenidoComentario, fotoComentario, iddiscusion, idcliente)
  values
  ('2021-03-15', '150', '10', '5', 'Hola, soy un cliente de la plataforma, quiero saber si puedo hacer una consulta sobre el producto que quiero comprar', 'https://res.cloudinary.com/geekit/image/upload/v1654997700/discusiones_fotos/ernesto_uvseea.jpg', '1', '2');
insert into comentario
  (fechaComentario, reaccionLike, reaccionDislike, reaccionComent, contenidoComentario, fotoComentario, iddiscusion, idcliente)
  values
  ('2021-03-15', '150', '10', '555', 'Hola, soy un cliente de la plataforma, quiero saber si puedo hacer una consulta sobre el producto que quiero comprar', 'https://res.cloudinary.com/geekit/image/upload/v1654997700/discusiones_fotos/ernesto_uvseea.jpg', '2', '2');

insert into comentario
  (fechaComentario, reaccionLike, reaccionDislike, reaccionComent, contenidoComentario, fotoComentario, iddiscusion, idcliente)
  values
  ('2025-03-15', '150', '10', '55', 'Loreeeeeeeeeem', 'https://res.cloudinary.com/geekit/image/upload/v1654997700/discusiones_fotos/ernesto_uvseea.jpg;https://res.cloudinary.com/geekit/image/upload/v1654997700/discusiones_fotos/ernesto_uvseea.jpg', '1', '2');