const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const indexRouter = require('./routes/index');
const agrgarRouter = require('./routes/agregar');
const consultarRouter = require('./routes/consultar');
const editarRouter = require('./routes/editar');
const eliminarRouter = require('./routes/index');
const editarid = require('./routes/editarid');
const queries = require('./config/querys');

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/agregar', agrgarRouter);
app.use('/consultar', consultarRouter);
app.use('/editar', editarRouter);
app.use('/eliminar', eliminarRouter);
app.use('/editarid', editarid)

app.post("/agregar", async (req,res) => {

    const { marca, modelo, color, precio, capacidad_almacenamiento, ram, sistema_operativo } = req.body;

        try {
            await queries.agregarCelular(marca, modelo, color, precio, capacidad_almacenamiento, ram, sistema_operativo);
            res.redirect('/');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al registrar los datos');
        }
});

app.post("/editarid/:id", async (req, res) => {
    const { id } = req.params;
    const { marca, modelo, color, precio, capacidad_almacenamiento, ram, sistema_operativo } = req.body;

    try {
        await queries.editarCelular(id, marca, modelo, color, precio, capacidad_almacenamiento, ram, sistema_operativo);
        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar los datos');
    }
});

app.listen(port, ()=>{
    console.log(`Servidor en funcionamiento desde http://localhost:${port}`)
})

/*
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
*/


//Agregar usaurio

/*
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

*/