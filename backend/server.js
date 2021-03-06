const express = require('express');
const app = express();
const bodyparser = require('body-parser');

const config = {
    user: 'sa',
    password: 'jgjggjgj.P0',
    server: 'localhost', 
    database: 'carros',
};

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(bodyparser.json({limit: "50mb"}));
app.use(bodyparser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

/*  borrar carros */
app.delete("/carro/borrar/:id", (req, res) => { 
  
    const id = req.params.id;    
    const sql = require("mssql"); 
    const connection = new sql.ConnectionPool(config, function(err) {
        const r = new sql.Request(connection);
        r.multiple = true;
        r.query(`DELETE FROM vehiculos WHERE id = ${id}`, function(err, recordsets) {
           
            connection.close();
        });
    });
});

/*  guardar carros sql */
app.post('/carro/nuevo',function(req,res){
  let vehiculo={
  "linea":req.body.linea,
  "marca":req.body.marca,
  "modelo":req.body.modelo,
  "color":req.body.color,
  "foto":req.body.Foto,
  }
  
  const sql = require("mssql");  
  const connection = new sql.ConnectionPool(config, function(err) {
    const r = new sql.Request(connection);
    r.multiple = true;
    r.query(`INSERT INTO vehiculos (linea, marca, modelo, color, foto) VALUES ('${vehiculo.linea}', '${vehiculo.marca}' , '${vehiculo.modelo}', '${vehiculo.color}','${vehiculo.foto}')`, function(err, recordsets) {
       
        connection.close();
    });
  });
});

/*  actualizar carros sql */
app.put('/carro/actualizar/:id',function(req,res){

    const id = req.params.id;  
    let vehiculo={
    "linea":req.body.linea,
    "marca":req.body.marca,
    "modelo":req.body.modelo,
    "color":req.body.color,
    "foto":req.body.Foto,
    }
    
    const sql = require("mssql"); 
    const connection = new sql.ConnectionPool(config, function(err) {
      const r = new sql.Request(connection);
      r.multiple = true;
      r.query(`UPDATE vehiculos 
      SET linea = '${vehiculo.linea}',
          marca = '${vehiculo.marca}',
          modelo = '${vehiculo.modelo}',
          color = '${vehiculo.color}',
          foto = '${vehiculo.foto}'
      WHERE id = ${id}`, function(err, recordsets) {
          console.log(err)
          connection.close();
      });
    });
  });
  

/*  enviar carros */
app.get('/api/carros', function (req, res) {
   
    const sql = require("mssql");
     
    sql.connect(config, function (err) {
    
        if (err) console.log(err);
        
        const request = new sql.Request();           
        
        request.query('select * from vehiculos', function (err, recordset) {            
            if (err) console.log(err)            
            res.send(recordset);                      
        });
    });
});

app.listen(5000, function () {
    console.log('Server is running..');
});