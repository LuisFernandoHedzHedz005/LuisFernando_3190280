const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const indexRouter = require('./routes/index');
const agrgarRouter = require('./routes/agregar');
const consultarRouter = require('./routes/consultar');
const editarRouter = require('./routes/editar');
const eliminarRouter = require('./routes/eliminar');
const editaridRouter = require('./routes/editarid');
const eliminaridRouter = require('./routes/eliminarid');
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
app.use('/editarid', editaridRouter);
app.use('/eliminarid', eliminaridRouter);

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

app.get("/eliminarid/:id", async (req, res) => {
    const { id } = req.params;

    try {
        await queries.eliminarCelular(id);
        res.redirect('/eliminarid');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar el registro');
    }
});

app.listen(port, '0.0.0.0', ()=>{
    console.log(`Servidor en funcionamiento desde http://192.168.50.134:${port}`)
})
