const {Router} = require("express");

const router = Router();

const pool = require("../database")

router.get("/productos/", async(req, res) => {
    const result = await pool.query("SELECT * FROM producto;");
    res.json({products: result.rows})
});

router.get("/productos/:id", async(req, res) => {
    const result = await pool.query("SELECT * FROM producto WHERE idProducto = $1", [parseInt(req.params.id)]);
    if(result.rowCount > 0) 
        res.json({product: result.rows[0]})
    else 
        res.status(404).json({error: true, msg: "Producto no existente"})
});

module.exports = router;