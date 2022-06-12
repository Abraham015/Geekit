const discusionesCtrl = {};
const pool = require("../database");

discusionesCtrl.updateDiscusion = async (idDiscusion, values) =>{
    const discusion = await pool.query("UPDATE discusion SET reaccionlike=$1, reacciondislike=$2, reaccioncoment=$3 WHERE iddiscusion=$4 RETURNING *", [values.reaccionlike, values.reacciondislike, values.reaccioncoment, idDiscusion]);
    return discusion.rows[0];
}
// Obtenemos una discusión a partir de su iddiscusion
discusionesCtrl.getDiscusion = async (idDiscusion) =>{
    const discusion = await pool.query("SELECT * FROM discusion WHERE iddiscusion=$1", [idDiscusion]);
    return discusion.rows[0];
}

/* Exportamos las funciones */
module.exports = discusionesCtrl;