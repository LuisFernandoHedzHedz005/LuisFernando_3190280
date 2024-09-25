//Programa 1
//Imprimir una cadena de manera vertical y horizontal 
let cad1 = "";
for (let i = 1; i <= 4; i++) {
    cad1 = cad1 + "+";
}
console.log(cad1);


let cad2 = "";
for (let i = 1; i <= 4; i++) {
    cad2 = cad2 + "+\n";
}
console.log(cad2);



//Programa 2
//Funcion aplicando las funcionalidades del programa 1
function figura1() {
    let cad1 = "";
    for (let i = 1; i <= 4; i++) {
        cad1 = cad1 + "+";
    }
    console.log(cad1);
}
figura1();


function figura2() {
    let cad2 = "";
    for (let i = 1; i <= 4; i++) {
        cad2 = cad2 + "+\n";
    }
    console.log(cad2);
}
figura2();


//Programa 3
//Imprimir todas las tablas de multiplicar basicas del 1 al 10 
function tabla_Multiplicar(){
    for(let i = 1; i <= 10; i++){
        console.log(`Tabla del ${i}`)
        for(let j = 1; j <= 10; j++){
            console.log(`${i} x ${j} = ${i*j}`);
        }
    }
}

tabla_Multiplicar();


//Programa 4
//Imprimir el indice y elemento de una lista utilizandoo for each 


let frutas = ["platano","manzana","pera","sandia","piña","limon","toronja","naranja","mandarina","uva"];

frutas.forEach((fruta, index) => {
    console.log(index, fruta)
})



