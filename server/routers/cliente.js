const {Router} = require("express");
const router = Router();

const clienteCtrl = require('../controllers/cliente');
const forosCtrl = require('../controllers/foros');

// Para obtener los foros del usuario
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

// Para obtener las discusiones de los foros del usuario
router.get("/cliente/:username/discusiones", async (req, res) => {
    // Obtenemos el tipo de ordenamiento de las discusiones
    const order = req.query.order == "newer" ? 'fechaDiscusion' : 'reaccionComent';
    
    const clienteID = await clienteCtrl.getId(req.params.username); // Obtenemos el id del cliente
    const foros = await forosCtrl.getForoWhereCliente(clienteID); // Obtenemos los foros del cliente
    
    // Obtenemos las discusiones de cada foro
    let discusiones = [];
    for(let i = 0; i < foros.length; i++) {
        const discusionesForo = await forosCtrl.getDiscusionesForo(foros[i].idforo, order);

        // Agregamos cada uno al arreglo general de discusiones
        discusionesForo.forEach((discusion) =>{
            discusiones.push(discusion);
        });
    }  
    res.json({discusiones});
});

module.exports = router;