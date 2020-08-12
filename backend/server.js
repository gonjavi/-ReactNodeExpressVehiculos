
var bodyparser = require('body-parser');
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
        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from vehiculos', function (err, recordset) {
            
            if (err) console.log(err)
            // send records as a response
            res.send(recordset);  
            console.log(recordset)          
        });
    });
});

app.listen(5000, function () {
    console.log('Server is running..');
});