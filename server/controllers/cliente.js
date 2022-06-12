const clienteCtrl = {};
const pool = require("../database");


clienteCtrl.getId = async (username) =>{
    const idCliente = await pool.query("SELECT idcliente FROM cliente WHERE nicknameCliente=$1", [username]);
    return idCliente.rows[0].idcliente;
}
// Obtenemos un cliente por su id
clienteCtrl.getCliente = async (idCliente) =>{
    const cliente = await pool.query("SELECT * FROM cliente WHERE idcliente=$1", [idCliente]);
    return cliente.rows[0];
}
// Obtener varios clientes por id
clienteCtrl.getClientes = async (idClientes) => {
    const clientes = await pool.query("SELECT * FROM cliente WHERE idcliente in ($1)", [idClientes]);
    return clientes.rows;
}

/* Exportamos las funciones */
module.exports = clienteCtrl;