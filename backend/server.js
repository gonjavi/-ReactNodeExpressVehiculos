const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


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



app.get('/api/carros', function (req, res) {
   
    const sql = require("mssql");
    
    const config = {
        user: 'sa',
        password: 'jgjggjgj.P0',
        server: 'localhost', 
        database: 'carros' 
    };
    
    sql.connect(config, function (err) {
    
        if (err) console.log(err);
        
        var request = new sql.Request();           
        
        request.query('select * from vehiculos', function (err, recordset) {
            
            if (err) console.log(err)            
            res.send(recordset);                      
        });
    });
});

app.listen(5000, function () {
    console.log('Server is running..');
});