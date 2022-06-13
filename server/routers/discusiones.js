const { Router } = require("express");

const router = Router();

const discusionesCtrl = require('../controllers/discusiones');
const clienteCtrl = require('../controllers/cliente');
const forosCtrl = require('../controllers/foros');


router.get("/discusiones/:id", async (req, res) => {
    const discusion = await discusionesCtrl.getDiscusion(req.params.id);
    res.json(discusion);
});

// Obtenemos la foto de perfil del creador de la discusión
router.get("/discusiones/:id/creador", async (req, res) => {
    const discusion = await discusionesCtrl.getDiscusion(req.params.id);
    const cliente_creador = await clienteCtrl.getCliente(discusion.idcliente);

    delete cliente_creador.fechaNacimiento;
    delete cliente_creador.direccion;
    delete cliente_creador.contrasena;
    delete cliente_creador.correo;

    res.json(cliente_creador);
});

// Obtenemos la foto de portada del foro de la discusión
router.get("/discusiones/:id/foro", async (req, res) => {
    const discusion = await discusionesCtrl.getDiscusion(req.params.id);
    const foro = await forosCtrl.getForo(discusion.idforo);

    res.json(foro);
});

router.put("/discusiones/:id", async (req, res) => {
    // Obtenemos el id del parámetro
    const discusionID = req.params.id;
    // Obtenemos los valores del body
    const values = req.body;
    // Actualizamos la discusión
    const discusionActualizada = await discusionesCtrl.updateDiscusion(discusionID, values);

    res.json(discusionActualizada);
});

// Insertar una nueva discusion
router.post("/discusiones/", async (req, res) => {
    // Obtenemos los valores del body
    const {contenido, idforo, nickCliente} = req.body;

    // Obtenemos todas las imágenes de la discusión
    const imagenes = Object.values(req.files || {});

    // Las subimos a cloudinary y obtenemos sus urls
    let urls = '';
    for(let i = 0; i < imagenes.length; i+=1){
        try {   
            const url = await discusionesCtrl.uploadImage(imagenes[i]);
            urls = urls + url + ";";
        } catch(error){
            res.json({error});
        }
    }
    
    // Insertamos la discusión
    const idCliente = await clienteCtrl.getId(nickCliente);
    const resInsert = await discusionesCtrl.createDiscusion(urls, contenido, idCliente, idforo);

    res.json({message: "OK"});
});

module.exports = router;