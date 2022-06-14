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
    user: 'geekitISW1007@outlook.com',
    pass: 'geekit1006'
  }
});

// setup e-mail data, even with unicode symbols
var mailOptions = {
                from: '"Geekit" <geekitISW1007@outlook.com>', // sender address (who sends)
                to: "abraham.hdez.aha@gmail.com", // list of receivers (who receives)
                subject: 'Confirmación de Compra', // Subject line
                text: 'Confirmación de Compra', // plaintext body
                html: '<b>GRACIAS POR TU COMPRA</b><br>Hola querido usuario, nos complace informar que su compra ha sido registrada en el sistema. <br>En un lapso máximo de dos días habiles para corroborar los datos de envío de tus productos. <br><br>Agradecemos tu preferencia y esperamos que tu experiencia dentro de la aplicación sea la mejor<br><br>Atentamente, <br><br><img src="cid:Geekit" height="100px" weight="100px">', // html body
                
                attachments: [{
                    filename: 'Geekit.png',
                    path:'C:/Users/hp/Desktop/Geekit/Geekit/server/files/Geekit.png',
                    cid: 'Geekit' //my mistake was putting "cid:logo@cid" here! 
                },
                {
                    filename: 'comprobante.pdf',
                    path: 'C:/Users/hp/Desktop/Geekit/Geekit/server/files/comprobante-pago.pdf',
                    cid: 'logo', //my mistake was putting "cid:logo@cid" here! 
                    contentType: "application/pdf"
                }    
                ]
                
            };

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});