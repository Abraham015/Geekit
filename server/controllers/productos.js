const productosCtrl = {};
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


// Obtenemos todos los productos
productosCtrl.getProductos = async () =>{
    const prod = await pool.query("SELECT * FROM producto");
    return prod.rows[0];
}

// Obtener todos los productos que coincidan en algun parámetro con la búsqueda
productosCtrl.getProductosWhere = async (busqueda) =>{
    let allProductos = [];
    let prod = []
    const clave = 'idproducto';

    // Seleccionamos por nombre
   prod = await pool.query("select * from producto where nombreproducto ilike $1", ['%'+ busqueda+'%']);
    allProductos = allProductos.concat(prod.rows)
    allProductos = eliminarDuplicados(allProductos, clave);
    

   // Seleccionamos por descripción
   prod = await pool.query("select * from producto where descripcion ilike $1", ['%'+ busqueda+'%']);
   allProductos = allProductos.concat(prod.rows)
   allProductos = eliminarDuplicados(allProductos, clave);

   // Seleccionamos por etiqueta
   prod = await pool.query("select * from producto where etiqueta ilike $1", ['%'+ busqueda+'%']);   
   allProductos = allProductos.concat(prod.rows)
   allProductos = eliminarDuplicados(allProductos, clave);

   // Seleccionamos por vendedor
   prod = await pool.query("select * from producto where idvendedor = (select idvendedor from vendedor where nombrevendedor ilike $1)", ['%'+ busqueda+'%']);   
   allProductos = allProductos.concat(prod.rows)
   allProductos = eliminarDuplicados(allProductos, clave);

   return allProductos;
}

//Obtenemos producto por su id
productosCtrl.getProducto = async (idProd) =>{
    const prod = await pool.query("SELECT * FROM producto WHERE idproducto=$1", [idProd]);
    return prod.rows[0];
}

module.exports = productosCtrl;