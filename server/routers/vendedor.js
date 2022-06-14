const {Router} = require("express");

const router = Router();

const pool = require("../database")

router.get("/vendedor/", async(req, res) => {
    const result = await pool.query("SELECT * FROM vendedor;");
    res.json({seller: result.rows})
});

router.get("/vendedor/:id", async(req, res) => {
    const result = await pool.query("SELECT * FROM vendedor WHERE idvendedor = $1", [parseInt(req.params.id)]);
    if(result.rowCount > 0) 
        res.json({seller: result.rows[0]})
    else 
        res.status(404).json({error: true, msg: "Vendedor no existente"})
});

module.exports = router;