const discusionesCtrl = {};
const pool = require("../database");

const cloudinary = require('cloudinary'); // Importamos cloudinary
const fs = require('fs'); // Importamos el filesystem para eliminar archivos

discusionesCtrl.updateDiscusion = async (idDiscusion, values) => {
    const discusion = await pool.query("UPDATE discusion SET reaccionlike=$1, reacciondislike=$2, reaccioncoment=$3 WHERE iddiscusion=$4 RETURNING *", [values.reaccionlike, values.reacciondislike, values.reaccioncoment, idDiscusion]);
    return discusion.rows[0];
}
// Obtenemos una discusión a partir de su iddiscusion
discusionesCtrl.getDiscusion = async (idDiscusion) => {
    const discusion = await pool.query("SELECT * FROM discusion WHERE iddiscusion=$1", [idDiscusion]);
    return discusion.rows[0];
}

// Subimos la imagen a cloudinary
discusionesCtrl.uploadImage = async (imagen) => {
    const file_path = `${__dirname}/../uploads/${imagen.name}`; // Configuramos su path local
    await imagen.mv(file_path); // Guardamos la imagen en local
    const response = await cloudinary.v2.uploader.upload(file_path, { folder: "discusiones_fotos" }); // Subimos la imagen a cloudinary
    await fs.unlinkSync(file_path) // Eliminando archivo
    return response.url;
}

// Insertamos una discusion a la base de datos
discusionesCtrl.createDiscusion = async (fotodiscusion, contenido, idcliente, idforo) => {
    const discusion = await pool.query(`INSERT INTO discusion 
    (fechadiscusion, reaccionlike, reacciondislike, reaccioncoment, fotodiscusion, contenido, idcliente, idforo) 
    VALUES (now(), 0, 0, 0, $1, $2, $3, $4) RETURNING iddiscusion`, [fotodiscusion, contenido, idcliente, idforo]);
    return discusion.rows[0];
}

/* Exportamos las funciones */
module.exports = discusionesCtrl;