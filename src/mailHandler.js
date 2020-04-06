//Requerimos el paquete
var nodemailer = require('nodemailer');

//Creamos el objeto de transporte
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'neonatologo.carlossanchez@gmail.com',
    pass: 'o3diWs010A0A'
  }
});

var mensaje = "Prueba";

var mailOptions = {
  from: 'neonatologo.carlossanchez@gmail.com',
  to: 'neonatologo.carlossanchez@yahoo.com',
  subject: 'Asunto Del Correo',
  text: mensaje
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email enviado: ' + info.response);
  }
});