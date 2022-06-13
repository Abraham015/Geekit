const productosCtrl = {};
const pool = require("../database");

// Obtenemos todos los productos
productosCtrl.getProductos = async () =>{
    const prod = await pool.query("SELECT * FROM producto");
    return prod.rows[0];
}

//Obtenemos producto por su id
productosCtrl.getProducto = async (idProd) =>{
    const prod = await pool.query("SELECT * FROM producto WHERE idproducto=$1", [idProd]);
    return prod.rows[0];
}