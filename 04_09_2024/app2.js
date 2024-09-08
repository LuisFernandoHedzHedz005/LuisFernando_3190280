//Objeto
let miCarro = new Object();
miCarro.marca = "Ford";
miCarro.modelo = 2013;
miCarro.color = "negro;"

console.log(miCarro);

let miMoto = {
    marca: "Ford",
    modelo: 2013,
    color: "Negro",
    caracteristicas: ["CLD250", "KLM1500", "IR;2"]
};

console.log(miMoto.marca);
console.log(miMoto['modelo']);
console.log(miMoto.caracteristicas [1])
//CRUD

miMoto.color = "Azul";
console.log(miMoto.color);
miMoto.modelo = 2024;
console.log(miMoto.modelo)
