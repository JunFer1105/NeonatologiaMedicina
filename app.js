var express = require('express');
var app= express();

app.get('/',(req,res)=>{
	res.send('Neonatologia');
});

app.listen(3000, ()=> {
	console.log('Escuchando en el puerto 3000');
});