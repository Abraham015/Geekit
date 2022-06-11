const express = require("express");
const validateForm = require("../controllers/validateForms");
const router = express.Router();
const Yup = require("yup");
const pool = require("../database");
var nodemailer = require('nodemailer');

//Declaramos las expresiones regualares a utilizar
const expresionesRegulares = {
    nombre: new RegExp(/^[a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙñÑ\s]{1,40}$/),
    correo: new RegExp(/^[a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙñÑ0-9_.+-]+@[a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙñÑ0-9-]+\.[a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙñÑ0-9-.]+$/),
    pass: new RegExp(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{5,15}$/),
};

// Create the transporter with the required configuration for Outlook
// change the user and pass !
var transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false
    },
    auth: {
        user: 'geekitISW1006@outlook.com',
        pass: 'geekit1006'
    }
});

const formSchema = Yup.object({
    username: Yup.string().required("¡Nombre de usuario requerido!"),
    password: Yup.string().required("¡Contraseña requerida!").min(5, "Contraseña corta").max(15, "Contraseña demasiado larga"),
});

router.route("/inicio")
    .get(async (req, res) => {
        if (req.session.user && req.session.user.username) {
            console.log("loggedin");
            res.json({ loggedIn: true, username: req.session.user.username });
        } else {
            res.json({ loggedIn: false });
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
            if (potentialLoginCliente.rowCount === 0) {
                //No es un cliente
                if (potentialLoginVendedor.rowCount === 0) {
                    //No es un vendedor
                    if (potentialLoginAdmin.rows[0].contrasenaadmin === req.body.password) {
                        //LoginAdmin
                        req.session.user = {
                            username: req.body.username,
                            id: potentialLoginAdmin.rows[0].idadministrador,
                        }
                        res.json({ loggedIn: true, username: req.body.username });
                    } else {
                        //not good login
                        res.json({ loggedIn: false, status: "Usuario y/o contraseña incorrectos" });
                    }
                } else {
                    //Si es un vendedor
                    if (potentialLoginVendedor.rows[0].contrasena === req.body.password) {
                        //LoginVendedor
                        req.session.user = {
                            username: req.body.username,
                            id: potentialLoginVendedor.rows[0].idvendedor,
                        }
                        res.json({ loggedIn: true, username: req.body.username });
                    }
                }
            } else {
                //Si es un cliene
                if (potentialLoginCliente.rows[0].contrasena === req.body.password) {
                    //LoginCliente
                    req.session.user = {
                        username: req.body.username,
                        id: potentialLoginCliente.rows[0].idcliente,
                    }
                    res.json({ loggedIn: true, username: req.body.username });
                }
            }
            
        } else {
            res.json({ loggedIn: false, status: "Usuario y/o contraseña incorrectos"});
            console.log("Usuario y/o contraseña incorrectos");
        }

    });

/*Esto sera para el cliente*/
router.post("/registroCliente", async (req, res) => {
    validateForm(req, res);
    //Para el cliente
    const existingUserClient = await pool.query("SELECT nicknamecliente FROM cliente WHERE nicknamecliente=$1", [req.body.username]);
    //Para el vendedor
    const existingUserSeller = await pool.query("SELECT nicknamevendedor FROM vendedor WHERE nicknamevendedor=$1", [req.body.username]);
    //Para el admin
    const existingUserAdmin = await pool.query("SELECT nicknameadmin FROM administrador WHERE nicknameadmin=$1", [req.body.username]);
    //comprobar la existencia 
    if (existingUserClient.rowCount === 0 && existingUserSeller.rowCount === 0 && existingUserAdmin.rowCount === 0) {
        const existingEmailUser = await pool.query("SELECT correo FROM cliente WHERE nicknamecliente=$1", [req.body.email]);
        const existingEmailSeller = await pool.query("SELECT correo FROM vendedor WHERE nicknamevendedor=$1", [req.body.email]);
        if(existingEmailUser.rowCount===0 && existingEmailSeller.rowCount===0){
            //registrar
            //Comprobamos si el nombre es correcto, es decir, no tiene números
            if (!expresionesRegulares.nombre.test(req.body.name)) {
                //Error
                res.json({ loggedIn: false, status: "Campo nombre no debe incluir números" });
            } else {
                //Comprobamos si el correo esta bien escrito, es decir, no tiene números
                if (!expresionesRegulares.correo.test(req.body.email)) {
                    //Error
                    res.json({ loggedIn: false, status: "Dirección de correo inválida" });
                } else {
                    const fecha = new Date(req.body.birth);
                    const cero = "0";
                    let mes = "";
                    if (fecha.getMonth() < 10) {
                        let mes1 = (fecha.getMonth() + 1).toString();
                        mes = cero + mes1;
                    } else {
                        mes = fecha.getMonth().toString();
                    }
                    let date = fecha.getFullYear() + "-" + mes + "-" + fecha.getDate();
                    const newUserQuery = await pool.query("INSERT INTO cliente (nombreCliente,nicknameCliente,fechaNacimiento,fotoPerfil,direccion,contrasena,correo) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING idcliente", [req.body.name, req.body.username, date, "algo", req.body.direction, req.body.password, req.body.email]);
                    req.session.user = {
                        username: req.body.username,
                        id: newUserQuery.rows[0].idcliente,
                    }
                    // setup e-mail data, even with unicode symbols
                    var mailOptions = {
                        from: '"Geekit" <geekitISW1006@outlook.com>', // sender address (who sends)
                        to: req.body.email, // list of receivers (who receives)
                        subject: 'Confirmación de Creación de Cuenta', // Subject line
                        text: 'Confirmación de Creación de Cuenta', // plaintext body
                        html: '<b>BIENVENIDO AL SISTEMA GEEKIT</b><br>Hola querido usuario, nos complace informar que su cuenta dentro de la plataforma ha sido creada con éxito. <br>Esperemos que disfurtes de la aplicación y de la grandiosa comunidad. <br><br><img src="cid:logo">', // html body

                        attachments: [{
                            filename: 'test.png',
                            path: __dirname + '/images/Confirmación.png',
                            cid: 'logo' //my mistake was putting "cid:logo@cid" here! 
                        }]
                    };

                    // send mail with defined transport object
                    transporter.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            return console.log(error);
                        }
                        console.log('Message sent: ' + info.response);
                    });
                    res.json({ loggedIn: true, username: req.body.username });
                }
            }
        }else{
            res.json({ loggedIn: false, status: "Correo electrónico ya utilizado" });
        }
    } else {
        res.json({ loggedIn: false, status: "Nickname ya utilizado" });
    }
});

router.post("/registroVendedor", async (req, res) => {
    validateForm(req, res);
    //Para el cliente
    const existingUserClient = await pool.query("SELECT nicknamecliente FROM cliente WHERE nicknamecliente=$1", [req.body.username]);
    //Para el vendedor
    const existingUserSeller = await pool.query("SELECT nicknamevendedor FROM vendedor WHERE nicknamevendedor=$1", [req.body.username]);
    //Para el admin
    const existingUserAdmin = await pool.query("SELECT nicknameadmin FROM administrador WHERE nicknameadmin=$1", [req.body.username]);
    //comprobar la existencia 
    if (existingUserClient.rowCount === 0 && existingUserSeller.rowCount === 0 && existingUserAdmin.rowCount === 0) {
        const existingEmailUser = await pool.query("SELECT correo FROM cliente WHERE nicknamecliente=$1", [req.body.email]);
        const existingEmailSeller = await pool.query("SELECT correo FROM vendedor WHERE nicknamevendedor=$1", [req.body.email]);
        if(existingEmailUser.rowCount===0 && existingEmailSeller.rowCount===0){
            //registrar
            //Comprobamos si el nombre es correcto, es decir, no tiene números
            if (!expresionesRegulares.nombre.test(req.body.name)) {
                //Error
                res.json({ loggedIn: false, status: "Campo nombre no debe incluir números" });
            } else {
                //Comprobamos si el correo esta bien escrito, es decir, no tiene números
                if (!expresionesRegulares.correo.test(req.body.email)) {
                    //Error
                    res.json({ loggedIn: false, status: "Dirección de correo inválida" });
                } else {
                    const fecha1 = Date.now();
                    let fecha = new Date(fecha1);
                    console.log(fecha);
                    const cero = "0";
                    let mes = "";
                    if (fecha.getMonth() < 10) {
                        let mes1 = (fecha.getMonth() + 1).toString();
                        mes = cero + mes1;
                    } else {
                        mes = fecha.getMonth().toString();
                    }
                    let date = fecha.getFullYear() + "-" + mes + "-" + fecha.getDate();
                    const newUserQuery = await pool.query("INSERT INTO vendedor (nombreVendedor,fechaUnio,categoria,tipoVendedor,calificacion,certificacion,nicknameVendedor,fotoVendedor,correo,contrasena) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING idvendedor", [req.body.name, date, req.body.category, req.body.type, 0, req.body.certification, req.body.username, "algo", req.body.email, req.body.password]);
                    req.session.user = {
                        username: req.body.username,
                        id: newUserQuery.rows[0].idvendedor,
                    }
                    // setup e-mail data, even with unicode symbols
                    var mailOptions = {
                        from: '"Geekit" <geekitISW1006@outlook.com>', // sender address (who sends)
                        to: req.body.email, // list of receivers (who receives)
                        subject: 'Confirmación de Creación de Cuenta', // Subject line
                        text: 'Confirmación de Creación de Cuenta', // plaintext body
                        html: '<b>BIENVENIDO AL SISTEMA GEEKIT</b><br>Hola querido usuario, nos complace informar que su cuenta dentro de la plataforma ha sido creada con éxito. <br>Esperemos que disfurtes de la aplicación y de la grandiosa comunidad. <br><br><img src="cid:logo">', // html body

                        attachments: [{
                            filename: 'test.png',
                            path: __dirname + '/images/Confirmación.png',
                            cid: 'logo' //my mistake was putting "cid:logo@cid" here! 
                        }]
                    };

                    // send mail with defined transport object
                    transporter.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            return console.log(error);
                        }
                        console.log('Message sent: ' + info.response);
                    });
                    res.json({ loggedIn: true, username: req.body.username });
                }
            }
        }else{
            res.json({ loggedIn: false, status: "Correo electrónico ya utilizado" });
        }
        
    } else {
        res.json({ loggedIn: false, status: "Nickname ya utilizado" });
    }
});

module.exports = router;