const forosCtrl = {};
const pool = require("../database");

function eliminarDuplicados(originalArray, clave){
    let unicos = [];

    for(var indice = 0; indice < originalArray.length; indice++) {

        const objeto = originalArray[indice];
        let esDuplicado = false;
        for(var i = 0; i < unicos.length; i++) {
      
          if (unicos[i][clave] === objeto[clave]) {
            esDuplicado = true;
            break;
          }
        }
        
        if (!esDuplicado) {
          unicos.push(objeto);
        }
      }
    return unicos;
}

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

// Obtener los miembros que coincidan en parte con el nickname y el nombre
forosCtrl.getMembers = async (busqueda, idforo) =>{
    let allMembers = [];
    let members = []
    const clave = 'idcliente';

    // Seleccionamos por nickname
    members = await pool.query("select * from cliente where nicknamecliente ilike $1 and idcliente in (select idcliente from foro_has_cliente where idforo = $2)", ['%'+ busqueda+'%', idforo]);
    allMembers = allMembers.concat(members.rows)
    allMembers = eliminarDuplicados(allMembers, clave);
        
    // Seleccionamos por nombre
    members = await pool.query("select * from cliente where nombrecliente ilike $1 and idcliente in (select idcliente from foro_has_cliente where idforo = $2)", ['%'+ busqueda+'%', idforo]);
    allMembers = allMembers.concat(members.rows)
    allMembers = eliminarDuplicados(allMembers, clave);

    return allMembers;
}

// Seleccionar todas las discusiones de un foro respecto a order by
forosCtrl.getDiscusionesForo = async(idForo, order) =>{
    let discusiones;
    if(order == 'fechaDiscusion')
        discusiones = await pool.query("SELECT * FROM discusion where idforo=$1 ORDER BY fechaDiscusion DESC", [idForo]);
    else
        discusiones = await pool.query("SELECT * FROM discusion where idforo=$1 ORDER BY reaccionComent DESC", [idForo]);

    return discusiones.rows;
}

// Elimina un cliente de un foro
forosCtrl.deleteMember = async (idForo, idCliente) =>{
    const deleteMember = await pool.query("DELETE FROM foro_has_cliente WHERE idforo=$1 AND idcliente in (SELECT idcliente FROM cliente where nicknameCliente=$2)", [idForo, idCliente]);
    return deleteMember.rows;
}

// Agregar un cliente a un foro teniendo su nicknameCliente
forosCtrl.addMember = async (idForo, idCliente) =>{
    const addMember = await pool.query("INSERT INTO foro_has_cliente (creador, idforo, idcliente) VALUES (false, $1, (SELECT idcliente FROM cliente where nicknameCliente=$2))", [idForo, idCliente]);
    return addMember.rows;
}

/* Exportamos las funciones */
module.exports = forosCtrl;