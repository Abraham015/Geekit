const {Router} = require("express");
const router = Router();

const clienteCtrl = require('../controllers/cliente');
const forosCtrl = require('../controllers/foros');

router.get("/cliente/:username/foros", async (req, res) => {
    const clienteID = await clienteCtrl.getId(req.params.username); // Obtenemos el id del cliente
    const forosWthMembers = await forosCtrl.getForoWhereCliente(clienteID); // Obtenemos los foros del cliente

    // Obtenemos la cantidad de miembros de cada foro
    const foros = await Promise.all( forosWthMembers.map(async foro => { // Promise all para concretar el map
        miembros = await forosCtrl.getMembersIdForo(foro.idforo);
        foro.n_miembros = miembros.length
        return foro;
    }));

    res.json({foros});
});

module.exports = router;