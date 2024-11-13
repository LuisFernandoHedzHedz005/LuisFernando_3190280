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
        console.log("la base de datos funciona correctament");
    }
    
})
/*
const port = 3090;
app.listen(port, hostname, ()=>{
    console.log(`Servidor en funcionamiento en http://${hostname}:${port}`)
})
*/
const port = 3009;
app.listen(port, ()=>{
    console.log(`Servidor en funcionamiento desde http://localhost:${port}`)
})

app.get('/', (req, res)=>{
    //consulta a la db
    const query = 'SELECT * FROM Usuarios'
    db.query(query,(err, results)=>{
        if(err){
            console.log(`error en db codigo: %¿${err}`);
            res.send('Error en la conexion de la base de datos')
        }else{
            res.render('index',{user:results});
        }
    });
})

//Agregar usaurio

app.post('/add',(res,req) =>{
    const {nombre, email} = req.body;
    const qyery = 'INSERT INTO users (nombre, email) VALUE (?,?)';
    db.query(query, [nombre,email],(err)=>{
        if(err){
            console.log("error en agregar user")
            res.send("error en agregar ususario")
        }else{
            res.redirect('/')
        }
    })
})

//editar ususario

app.get('/edit/:id', (req,res)=>{
    const {id} = req.params;
    const query = 'SELECT * FROM Usuarios WHERE id = ?';
    db.query(query, [id], (err,results)=>{
        if(err){
            res.send("Error al editar ususario");
        }else{
            res.render('edit', {user:results[0]})
        }
    });
})

//Eliminar ususario

app.get('/delet/:id', (req, res)=>{
    const {id} = req.params;
    const query = 'DELETE FROM Usuarios WHERE id = ?'
    db.query(query, [id], (err)=>{
        if(err){
            res.send("error al eliminar");
        }else{
            res.redirect('/');
        }
    });
});