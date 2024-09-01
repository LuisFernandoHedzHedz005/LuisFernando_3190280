function saludar(){
    console.log("Hola como estas")
}

saludar()

function saludo(nombreUsuario){
    console.log("Hola, como estas? " + nombreUsuario);
}

saludo("Luis");

function adios(userName){
    return "Adios " + userName;
}

console.log(adios("Luis"))