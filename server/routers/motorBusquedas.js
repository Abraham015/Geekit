const { Router } = require("express");

const router = Router();
const productosCtrl = require('../controllers/productos');
const forosCtrl = require('../controllers/foros');
const clienteCtrl = require('../controllers/cliente');

// Motor de búsquedas
router.get("/search/:category", async (req, res) => {
    const categoria = req.params.category;

    const categorias = {
        "productos": () => {
            return productosCtrl.getProductosWhere(req.query.q);
        },
        "miembros": () => {
            return forosCtrl.getMembers(req.query.q || '', req.query.id)
        },
        "foros": async () => {
            // Obtenemos primero el id del cliente para obtener los foros
            const clienteID = await clienteCtrl.getId(req.query.username);
            const forosWthtMembers = await forosCtrl.getForosWhere(req.query.q || '', clienteID);
            // Obtenemos la cantidad de miembros de cada foro
            const foros = await Promise.all(forosWthtMembers.map(async foro => { // Promise all para concretar el map
                miembros = await forosCtrl.getMembersIdForo(foro.idforo);
                foro.n_miembros = miembros.length
                return foro;
            }));
            return foros;
        }
    }

    const arreglo = await categorias[categoria]();

    res.json({ arreglo });
});

module.exports = router;