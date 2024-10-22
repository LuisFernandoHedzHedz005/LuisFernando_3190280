// Importamos el modulo HTTP que viene incluido en Node
const http = require('http');
//Definir un puerto en que el va a correr el servidor
const port = 3006;

// Crear un servidor
const server = http.createServer((req,res)=>{
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('Luis Fernando Hernandez Hernandez 319028005');


});

server.listen(port, ()=>{
    console.log(`El servidor esta en http://localhost:${port}`);
});