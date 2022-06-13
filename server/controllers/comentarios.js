const comentariosCtrl = {};
const pool = require("../database");
const clienteCtrl = require('../controllers/cliente');

// Obtenemos los comentarios de un foro por medio de su id y order
comentariosCtrl.getComentariosForo = async (idForo) =>{
    const comentarios = await pool.query("SELECT * FROM comentario where iddiscusion in (SELECT iddiscusion FROM discusion where idforo=$1) ORDER BY reaccionlike DESC", [idForo]);

    return comentarios.rows;
}

/* Exportamos las funciones */
module.exports = comentariosCtrl;