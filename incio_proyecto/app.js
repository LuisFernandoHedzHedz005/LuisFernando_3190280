const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const { query } = require('express');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine', 'ejs');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'node_crud',
    port: 3306
});

db.connect(error=>{
    if(error){
        console.log("error al conectar a la base de datos");
    }else{
        console.log("la base de datos funciona correctamente");
    }
    
})

const port = 3009;
app.listen(port, ()=>{
    console.log(`Servidor en funcionamiento desde http://localhost:${port}`)
})
