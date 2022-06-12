var nodemailer = require('nodemailer');

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
    user: 'geekitISW1006@outlook.com',
    pass: 'geekit1006'
  }
});

// setup e-mail data, even with unicode symbols
var mailOptions = {
  from: '"Geekit" <geekitISW1006@outlook.com>', // sender address (who sends)
  to: 'monicahernandezalvarado11@gmail.com', // list of receivers (who receives)
  subject: 'Confirmación de Creación de Cuenta', // Subject line
  text: 'Confirmación de Creación de Cuenta', // plaintext body
  html: '<b>BIENVENIDO AL SISTEMA GEEKIT</b><br>Hola querido usuario, nos complace informar que su cuenta dentro de la plataforma ha sido creada con éxito. <br>Esperemos que disfurtes de la aplicación y de la grandiosa comunidad. <br><br><img src="cid:logo">', // html body

  attachments: [{
    filename: 'test.png',
    path: __dirname + '/images/test.png',
    cid: 'logo' //my mistake was putting "cid:logo@cid" here! 
  }]
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});