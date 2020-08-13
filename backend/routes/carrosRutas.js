var express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

app.post('/carro/nuevo',function(req,res){
  const vehiculo={
  "linea":req.body.linea,
  "marca":req.body.marca,
  "modelo":req.body.modelo,
  "color":req.body.color,
  "Foto":req.body.Foto,
  }

  const sql = require("mssql");
      
  const config = {
      user: 'sa',
      password: 'jgjggjgj.P0',
      server: 'localhost', 
      database: 'carros' 
  };

  sql.connect(config, function (err) {
    connection.query('INSERT INTO vehiculos SET ?',vehiculo, function (error, results, fields) {
      if (error) {
        console.log("error ocurred",error);
        res.send({
        "code":400,
        "failed":"error ocurred"
      })
      }else{
        console.log('The solution is: ', results);
        res.send({
        "code":200,
        "success":"vehiculo registrado satisfactoriamente"
      });
    }
  });
});
});
