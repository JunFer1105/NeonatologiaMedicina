const express = require('express');
const app= express();

app.get('/',function(req,res){
	res.send('Neonatologia');
})

app.listen(3000, ()=> {
	console.log('Escuchando en el puerto 3000');
});