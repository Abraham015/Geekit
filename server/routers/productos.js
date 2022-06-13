const {Router} = require("express");

const router = Router();
const productosCtrl = require('../controllers/productos');

router.get("/productos", async (req, res) => {
    const producto = await productosCtrl.getProducto(req.params.id);
    res.json(producto);
});