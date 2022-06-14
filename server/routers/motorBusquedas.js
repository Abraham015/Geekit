const {Router} = require("express");

const router = Router();
const productosCtrl = require('../controllers/productos');
const forosCtrl = require('../controllers/foros');

// Motor de búsquedas
router.get("/search/:category", async (req, res) => {
    const categoria = req.params.category;

    const categorias ={
        "productos": () =>{
             return productosCtrl.getProductosWhere(req.query.q);
        },
        "miembros": () =>{
            return forosCtrl.getMembers(req.query.q || '', req.query.id)
       }
    }

    const arreglo  = await categorias[categoria]();

     res.json({arreglo});
});

module.exports = router;