const {Router} = require("express");

const router = Router();
const productosCtrl = require('../controllers/productos');

// Motor de búsquedas
router.get("/search/:category", async (req, res) => {
    const categoria = req.params.category;

    const categorias ={
        "productos": () =>{
             return productosCtrl.getProductosWhere(req.query.q);
        },
        "miembros": () =>{
            return productosCtrl.getProductos()
       }
    }

    const arreglo  = await categorias['productos']();

     res.json({arreglo});
});

//Para obtener un producto especifico segun su id
router.get("/productos/:id", async (req, res) => {
    const producto = await productosCtrl.getProducto(req.params.id);
    res.json(producto, categoria);
});

module.exports = router;