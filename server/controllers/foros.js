const forosCtrl = {};
const pool = require("../database");

// Obtenemos un foro por su id
forosCtrl.getForo = async (idForo) =>{
    const foro = await pool.query("SELECT * FROM foro WHERE idforo=$1", [idForo]);
    return foro.rows[0];
}

forosCtrl.getForoWhereCliente = async (idCliente) =>{
    const foros = await pool.query("SELECT * FROM foro where idforo in (SELECT idforo FROM foro_has_cliente WHERE idcliente=$1)", [idCliente]);
    return foros.rows;
}
forosCtrl.getMembersIdForo = async(idForo) =>{
    const membersId = await pool.query("SELECT idcliente FROM foro_has_cliente where idforo=$1", [idForo]);
    return membersId.rows;
}
forosCtrl.getMembersForo = async(idForo) =>{
    const members = await pool.query("SELECT * FROM cliente where idcliente in (SELECT idcliente FROM foro_has_cliente where idforo=$1)", [idForo]);
    return members.rows;
}
forosCtrl.getDiscusionesForo = async(idForo, order) =>{
    let discusiones;
    if(order == 'fechaDiscusion')
        discusiones = await pool.query("SELECT * FROM discusion where idforo=$1 ORDER BY fechaDiscusion DESC", [idForo]);
    else
        discusiones = await pool.query("SELECT * FROM discusion where idforo=$1 ORDER BY reaccionComent DESC", [idForo]);

    return discusiones.rows;
}

/* Exportamos las funciones */
module.exports = forosCtrl;