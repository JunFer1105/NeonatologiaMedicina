var express = require('express');
var app= express();

app.get('/',(req,res)=>{
	res.send('Neonatologia');
});

app.listen(process.env.PORT, ()=> {
	console.log('Escuchando en el puerto 3000 u otro');
});