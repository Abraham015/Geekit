const express = require("express");
const validateForm = require("../controllers/validateForms");
const router = express.Router();
const Yup = require("yup");
const pool = require("../database");

const formSchema = Yup.object({
    username: Yup.string().required("¡Nombre de usuario requerido!"),
    password: Yup.string().required("¡Contraseña requerida!").min(5, "Contraseña corta").max(15, "Contraseña demasiado larga"),
});

router.route("/inicio")
    .get(async (req, res) => {
        if(req.session.user && req.session.user.username){
            console.log("loggedin");
            res.json({loggedIn: true, username: req.session.user.username});
        }else{
            res.json({loggedIn: false});
        }
    })
    .post(async (req, res) => {
        validateForm(req, res);
        console.log(req.session);
        const potentialLoginCliente = await pool.query("SELECT idcliente,nicknameCliente, contrasena FROM cliente WHERE nicknameCliente=$1", [req.body.username]);
        const potentialLoginVendedor = await pool.query("SELECT idvendedor,nicknamevendedor,contrasena FROM vendedor WHERE nicknamevendedor=$1", [req.body.username]);
        const potentialLoginAdmin = await pool.query("SELECT idadministrador,nicknameadmin,contrasenaadmin FROM administrador WHERE nicknameadmin=$1", [req.body.username]);
        //console.log(potentialLoginCliente);
        if (potentialLoginCliente.rowCount > 0 || potentialLoginVendedor.rowCount > 0 || potentialLoginAdmin.rowCount > 0) {
            if (potentialLoginCliente.rows[0].contrasena === req.body.password) {
                //LoginCliente
                req.session.user = {
                    username: req.body.username,
                    id: potentialLoginCliente.rows[0].idcliente,
                }
                res.json({ loggedIn: true, username: req.body.username });
            } else if (potentialLoginVendedor.rows[0].contrasena === req.body.password) {
                //LoginVendedor
                req.session.user = {
                    username: req.body.username,
                    id: potentialLoginVendedor.rows[0].idvendedor,
                }
                res.json({ loggedIn: true, username: req.body.username });
            } else if (potentialLoginAdmin.rows[0].contrasenaadmin === req.body.password) {
                //LoginAdmin
                req.session.user = {
                    username: req.body.username,
                    id: potentialLoginAdmin.rows[0].idadministrador,
                }
                res.json({ loggedIn: true, username: req.body.username });
            } else {
                //not good login
                res.json({ loggedIn: false, status: "Usuario y/o contraseña incorrectos" });
                console.log("no entro bien");
            }
        } else {
            res.json({ loggedIn: false, status: "Usuario y/o contraseña incorrectos" });
            console.log("Usuario y/o contraseña incorrectos");
        }

    });

/*Esto sera para el cliente*/
router.post("/registro", async (req, res) => {
    validateForm(req, res);
    //Para el cliente
    const existingUserClient = await pool.query("SELECT nicknamecliente FROM cliente WHERE nicknamecliente=$1", [req.body.username]);
    //Para el vendedor
    const existingUserSeller = await pool.query("SELECT nicknamevendedor FROM vendedor WHERE nicknamevendedor=$1", [req.body.username]);
    //Para el admin
    const existingUserAdmin = await pool.query("SELECT nicknameadmin FROM administrador WHERE nicknameadmin=$1", [req.body.username]);
    //comprobar la existencia 
    if (existingUserClient.rowCount === 0 && existingUserSeller.rowCount === 0 && existingUserAdmin.rowCount === 0) {
        //registrar
        req.session.user = {
            username,
            id: newUserQuery.rows[0].id,
        }
        res.json({ loggedIn: true, username: req.body.username });
    } else {
        res.json({ loggedIn: false, status: "Nickname ya utilizado" });
    }
});

module.exports = router;