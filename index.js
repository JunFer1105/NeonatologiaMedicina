const express = require('express');
const app= express();

app.get('/',function(req,res){
	res.send('Neonatologia');
})

app.listen(app.get('port'), ()=> {
	console.log('Escuchando en el puerto ',app.get('port'));
});