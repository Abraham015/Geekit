CREATE DATABASE geekit;
/*Tabla del cliente*/
CREATE TABLE cliente
(
  idcliente int not null primary key,
  nombreCliente varchar(100),
  nicknameCliente varchar(45),
  fechaNacimiento DATE,
  fotoPerfil varchar(45),
  direccion varchar(100),
  contrasena varchar(45)
);

/*Vendedor*/
CREATE TABLE vendedor
(
  idvendedor int not null primary key,
  nombreVendedor varchar(45) not null,
  fechaUnio date not null,
  categoria varchar(45) not null,
  tipoVendedor varchar(45) not null,
  calificacion float not null,
  certificacion int not null,
  nicknameVendedor varchar(45) not null,
  fotoVendedor varchar(45) not null
);

/*Administrador*/
CREATE TABLE administrador
(
  idadministrador int not null primary key,
  contrasenaadmin varchar(45) not null,
  nombreAdmin varchar(45) not null,
  emailAdmin varchar(45) not null,
  nicknameAdmin varchar(45) not null,
  fechaNacimientoAdmin date not null,
  fotoAdmin varchar(45)
);

/*efectivo*/
CREATE TABLE efectivo
(
  idmetodoPago int not null primary key
);

/*Foro*/
CREATE TABLE foro
(
  idforo int not null primary key,
  norma varchar(45) not null,
  fotoPortada varchar(45) not null,
  nombreFoto varchar(45) not null,
  descripcion varchar(45) not null
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
  numTarjeta int,
  fechaCaducidad date,
  nombreTarjeta varchar(45),
  codigoSeguridad int,
  idmetodoPago int REFERENCES efectivo(idmetodoPago)
  /*Para hacer la relación entre tablas*/
);

/*Producto*/
CREATE TABLE producto
(
  idProducto int not null primary key,
  nombreProducto varchar(45) not null,
  precio float not null,
  etiqueta varchar(45) not null,
  descripcion varchar(100) not null,
  metodoEntrega varchar(45) not null,
  fotosProducto varchar(45) not null,
  stock int not null,
  idvendedor int REFERENCES efectivo(idmetodoPago)
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
  creador varchar(45) not null,
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
  iddiscusion int not null primary key,
  fechaDiscusion date not null,
  reaccion int not null,
  fotoDiscusion varchar(45),
  contenido varchar(45) not null,
  idcliente int REFERENCES cliente(idcliente),
  idforo int REFERENCES foro(idforo)
);

/*Comentario*/
CREATE TABLE comentario
(
  idcomentario int not null primary key,
  fechaComentario date not null,
  voto int,
  contenidoComentario varchar(45) not null,
  fotoComentario varchar(45),
  idcliente int REFERENCES cliente(idcliente),
  idforo int REFERENCES foro(idforo),
  idvendedor int REFERENCES vendedor(idvendedor)
);

/*reporteContenido*/
CREATE TABLE reporteContenido
(
  idreporteContenido int not null primary key,
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
  (idcliente,nombreCliente,nicknameCliente,fechaNacimiento,fotoPerfil,direccion,contrasena)
VALUES
  ('1','admin', 'admin', '2022-06-06', 'prueba', 'localhost', 'admin');