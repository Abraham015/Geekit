const {Router} = require("express");

const router = Router();
const forosCtrl = require('../controllers/foros');
const clienteCtrl = require('../controllers/cliente');

router.get("/foros/:id", async (req, res) => {
    const foro = await forosCtrl.getForo(req.params.id);
    res.json(foro);
});
// Obtener la lista de clientes de un foro
router.get("/foros/:id/clientes", async (req, res) => {
    let members = await forosCtrl.getMembersForo(req.params.id);
    res.json(members);
});

module.exports = router;