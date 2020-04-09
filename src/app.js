const express = require('express');
const app= express();
const path = require('path');
const exphbs = require('express-hbs');
const bodyParser = require('body-parser')
var mailHandler = require('./mailHandler');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded());

app.set('views', path.join(__dirname, 'views')); 

app.set('view engine','hbs')

app.get('/',(req,res)=>{
	res.render('templates/index');
});

app.get('/experiencias',(req,res)=>{
	res.render('partials/experiencias',{layout: 'layouts/plantilla'});
});

app.get('/galeria',(req,res)=>{
	res.render('partials/galeria',{layout: 'layouts/plantilla'});
});

app.get('/contact',(req,res)=>{
	res.render('partials/contact',{layout: 'layouts/plantilla'});
});

app.post('/enviarCorreo',(req,res)=>{
	console.log(req.body);
	mailHandler.sendEmail(req.body.name, req.body.email, req.body.phone, req.body.category, req.body.message);
	res.redirect('/');
});


app.listen(process.env.PORT || 3000, ()=> {
	console.log('Escuchando en el puerto 3000 u otro');
});