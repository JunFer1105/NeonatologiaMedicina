//Requerimos el paquete
var nodemailer = require('nodemailer');

//Creamos el objeto de transporte
var transporter = nodemailer.createTransport({
  host: 'a2plcpnl0515.prod.iad2.secureserver.net',
  port: 465,
  secure: true,
  auth: {
    user: 'contacto@neonatologocarlossanchez.com',
    pass: 'a2s3d!iWs01'
  },
  tls: {
    rejectUnauthorized: false
  }
});

module.exports.sendEmail = function (nombre, email, telefono, tipo, msj){

  var mailOptions = {
    from: '"Consultas pagina web" <contacto@neonatologocarlossanchez.com>',
    to: 'contacto@neonatologocarlossanchez.com',
    subject: 'Solicitud "neonatologocarlossanchez.com"',
    html: '<h3>NeonatologoCarlosSanchez.com</h3>'+
      '<h5>Nombre  </h5><p>'+nombre +'</p>'+
      '<h5>Email  </h5><p>'+email +'</p>'+
      '<h5>Telefono  </h5><p>'+telefono +'</p>'+
      '<h5>Tipo  </h5><p>'+tipo +'</p>'+
      '<p><strong>Mensaje: </strong>'+msj +'</p>'
   
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email enviado: ' + info.response);
      transporter.close();
    }
  });
};


