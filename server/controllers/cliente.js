const clienteCtrl = {};
const pool = require("../database");


clienteCtrl.getId = async (username) =>{
    const idCliente = await pool.query("SELECT idcliente FROM cliente WHERE nicknameCliente=$1", [username]);
    return idCliente.rows[0].idcliente;
}

/* Exportamos las funciones */
module.exports = clienteCtrl;