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
        ciphers: 'SSLv3'
    },
    auth: {
        user: 'geekitISW1007@outlook.com',
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
                        from: '"Geekit" <geekitISW1007@outlook.com>', // sender address (who sends)
                        to: req.body.email, // list of receivers (who receives)
                        subject: 'Confirmación de Creación de Cuenta', // Subject line
                        text: 'Confirmación de Creación de Cuenta', // plaintext body
                        html: '<b>BIENVENIDO AL SISTEMA GEEKIT</b><br>Hola querido usuario, nos complace informar que su cuenta dentro de la plataforma ha sido creada con éxito. <br>Esperemos que disfurtes de la aplicación y de la grandiosa comunidad. <br><br><img src="cid:logo" height="100px" weight="100px">', // html body

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
                        from: '"Geekit" <geekitISW1007@outlook.com>', // sender address (who sends)
                        to: req.body.email, // list of receivers (who receives)
                        subject: 'Confirmación de Creación de Cuenta', // Subject line
                        text: 'Confirmación de Creación de Cuenta', // plaintext body
                        html: '<b>BIENVENIDO AL SISTEMA GEEKIT</b><br>Hola querido usuario, nos complace informar que su cuenta dentro de la plataforma ha sido creada con éxito. <br>Esperemos que disfurtes de la aplicación y de la grandiosa comunidad. <br><br><img src="cid:logo" height="100px" weight="100px">', // html body

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

router.post("/prerestore", async (req, res) => {
    if (!expresionesRegulares.correo.test(req.body.email)) {
        //Error
        res.json({ loggedIn: false, status: "Dirección de correo inválida" });
    } else {
        var mailOptions = {
            from: '"Geekit" <geekitISW1007@outlook.com>', // sender address (who sends)
            to: req.body.email, // list of receivers (who receives)
            subject: 'Restaurar contraseña', // Subject line
            text: 'Restauración de la cuenta', // plaintext body
            html: 'Estimado usuario, usted ha solicitado la recuperación de su cuenta, por favor le pedimos que de clic en el siguiente link para cambiar su contraseña: <br><br><a href=http://localhost:3000/restore>Restaurar contraseña</a>'
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
        });
    }
    
});

router.post("/restore", async (req, res) => {
    const existingEmailCliente = await pool.query("SELECT correo FROM cliente WHERE correo=$1", [req.body.email]);
    const existingEmailSeller = await pool.query("SELECT correo FROM vendedor WHERE correo=$1", [req.body.email]);
    const existingEmailAdmin = await pool.query("SELECT emailAdmin FROM administrador WHERE emailadmin=$1", [req.body.email]);
    console.log(existingEmailCliente.rowCount);
    console.log(existingEmailSeller.rowCount);
    console.log(existingEmailAdmin.rowCount);
    
    if (!expresionesRegulares.correo.test(req.body.email)) {
        //Error
        res.json({ loggedIn: false, status: "Dirección de correo inválida" });
    } else {
        //comprobamos que las contraseñas sean iguales 
        if (req.body.password === req.body.confirm) {
            //Confirmar la existencia
            if (existingEmailCliente.rowCount === 0 || existingEmailSeller.rowCount === 0 || existingEmailAdmin.rowCount === 0) {
                //Confirmamos que la contraseña no existaconst 
                existingPasswordCliente = await pool.query("SELECT contrasena FROM cliente WHERE contrasena=$1", [req.body.password]);
                const existingPasswordSeller = await pool.query("SELECT contrasena FROM vendedor WHERE contrasena=$1", [req.body.password]);
                const existingPasswordAdmin = await pool.query("SELECT contrasenaadmin FROM administrador WHERE contrasenaadmin=$1", [req.body.password]);
                if (existingPasswordCliente.rowCount === 0 && existingPasswordSeller.rowCount === 0 && existingPasswordAdmin.rowCount === 0) {
                    if (existingEmailCliente.rowCount > 0) {
                        const updateUserQuery = await pool.query("UPDATE cliente set contrasena = $1 WHERE correo = $2 RETURNING idcliente", [req.body.password, req.body.email]);
                            req.session.user = {
                            username: req.body.email,
                            id: updateUserQuery.rows[0].idcliente,
                        }
                    }else{
                        if(existingEmailSeller.rowCount > 0){
                            const updateUserQuery = await pool.query("UPDATE vendedor set contrasena = $1 WHERE correo = $2 RETURNING idvendedor", [req.body.password, req.body.email]);
                                req.session.user = {
                                username: req.body.email,
                                id: updateUserQuery.rows[0].idvendedor,
                            }
                        }else{
                            if(existingEmailAdmin > 0){
                                const updateUserQuery = await pool.query("UPDATE administrador set contrasenaadmin = $1 WHERE emailAdmin = $2 RETURNING idadministrador", [req.body.password, req.body.email]);
                                req.session.user = {
                                    username: req.body.email,
                                    id: updateUserQuery.rows[0].idadministrador,
                                }
                            }
                        }
                    }
                    
                } else {
                    res.json({ loggedIn: false, status: "Elige una contraseña distinta a la existente" });
                }
            }else{
                res.json({ loggedIn: false, status: "Dirección de correo no asociada con ninguna cuenta" });
            }
        } else {
            res.json({ loggedIn: false, status: "Las contraseñas no coinciden" });
        }
    }
});

router.post("/metodo", async(req, res)=>{
    //console.log("Si entra");
    const existingUserCliente = await pool.query("SELECT nicknameCliente FROM cliente WHERE nicknameCliente=$1", [req.body.user]);
    const existingUserVendedor = await pool.query("SELECT nicknameVendedor FROM vendedor WHERE nicknameVendedor=$1", [req.body.user]);

    if(!expresionesRegulares.nombre.test(req.body.nombre)){
        res.json({ loggedIn: false, status: "Nombre no válido, escriba nuevamente"});
    }else{
        if(existingUserCliente.rowCount === 0 && existingUserVendedor.rowCount === 0){
            res.json({ loggedIn: false, status: "Nombre de usuario no existente"});
        }else{
            if(existingUserCliente.rowCount > 0){
                //Es cliente   
                const fecha = new Date(req.body.fecha);
                const cero = "0";
                let mes = "";
                if (fecha.getMonth() < 10) {
                    let mes1 = (fecha.getMonth() + 1).toString();
                    mes = cero + mes1;
                } else {
                    mes = fecha.getMonth().toString();
                }
                let date = fecha.getFullYear() + "-" + mes + "-00" ;
                console.log(date);
                /*const newUserQuery = await pool.query("INSERT INTO cliente (nombreCliente,nicknameCliente,fechaNacimiento,fotoPerfil,direccion,contrasena,correo) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING idcliente", [req.body.name, req.body.username, date, "algo", req.body.direction, req.body.password, req.body.email]);
                req.session.user = {
                    username: req.body.username,
                    id: newUserQuery.rows[0].idcliente,
                }*/
            }else{
                //Es vendedor
                const fecha = new Date(req.body.fecha);
                const cero = "0";
                let mes = "";
                if (fecha.getMonth() < 10) {
                    let mes1 = (fecha.getMonth() + 1).toString();
                    mes = cero + mes1;
                } else {
                    mes = fecha.getMonth().toString();
                }
                let date = fecha.getFullYear() + "-" + mes + "-" + fecha.getDate();
                //const newUserQuery1 = await pool.query("INSERT INTO efectivo VALUES 1");
                const newUserQuery = await pool.query("INSERT INTO tarjeta (numTarjeta,fechaCaducidad,nombreTarjeta,codigoSeguridad) VALUES ($1,$2,$3,$4)", [req.body.tarjeta, date, req.body.nombre, req.body.CCV]);
            }
        }
    } 
});

module.exports = router;