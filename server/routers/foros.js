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

// Mandar a eliminar un cliente de un foro
router.delete("/foros/:id/clientes/:nickCliente", async (req, res) => {
    const deletedMember = await forosCtrl.deleteMember(req.params.id, req.params.nickCliente);

    const clientes = await forosCtrl.getMembersForo(req.params.id);
    res.json(clientes);
}
);

// Mandar a insertar un cliente a un foro
router.post("/foros/:id/clientes/:nickCliente", async (req, res) => {
    const addedMember = await forosCtrl.addMember(req.params.id, req.params.nickCliente);
    
    const clientes = await forosCtrl.getMembersForo(req.params.id);
    res.json(clientes);
});

// Mandar a seleccionar las discusiones de un foro dependiendo de su order
router.get("/foros/:id/discusiones", async (req, res) => {
    const order = req.query.order == "newer" ? 'fechaDiscusion' : 'reaccionComent';
    const discusiones = await forosCtrl.getDiscusionesForo(req.params.id, order);
    res.json(discusiones);
});

module.exports = router;