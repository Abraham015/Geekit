const productosCtrl = {};
const pool = require("../database");

// Obtenemos productos por su id
productosCtrl.getProducto = async (idProd) =>{
    const prod = await pool.query("SELECT * FROM producto WHERE idproducto=$1", [idProd]);
    return prod.rows[0];
}