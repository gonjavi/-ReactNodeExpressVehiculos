
var express = require('express');
var app = express();

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