const {Router} = require("express");

const router = Router();
const productosCtrl = require('../controllers/productos');

//Para obtener todos los productos
router.get("/productos", async (res) => {
    const producto = await productosCtrl.getProductos();
    res.json(producto);
});

//Para obtener un producto especifico segun su id
router.get("/productos/:id", async (req, res) => {
    const producto = await productosCtrl.getProducto(req.params.id);
    res.json(producto);
});