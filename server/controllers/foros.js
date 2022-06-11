const forosCtrl = {};
const pool = require("../database");


forosCtrl.getForoWhereCliente = async (idCliente) =>{
    const foros = await pool.query("SELECT * FROM foro where idforo in (SELECT idforo FROM foro_has_cliente WHERE idcliente=$1)", [idCliente]);
    return foros.rows;
}
forosCtrl.getMembersIdForo = async(idForo) =>{
    const membersId = await pool.query("SELECT idcliente FROM foro_has_cliente where idforo=$1", [idForo]);
    return membersId.rows;
}

/* Exportamos las funciones */
module.exports = forosCtrl;