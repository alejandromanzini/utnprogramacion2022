var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res,) {
  res.render('index', { title: 'Express' });
});

router.post ('/', async (req,res)=> {
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var teléfono = req.body.teléfono;
  var mensaje = req.body.mensaje;
  
  console.log(req.body)
  
  
  
  var obj = {
    To: 'manzinialejandro@gmail.com',
    subject: 'Mensaje desde el sitio de cervecería',
html: nombre +" "+ apellido + "se comunicó via web y quiere mas info : " + email + ". <br> También hizo este comentario: "+ mensaje + ". <br> Llamar a: " + teléfono
  }
  var transport = nodemailer.createTransport ({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })
  var info = await transport.sendMail(obj);

  res.render ('index', {
    message: 'Su mensaje se envio',
  });
});












module.exports = router;
