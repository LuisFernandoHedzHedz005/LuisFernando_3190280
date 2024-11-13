/*
const operacionpromesa = (numero1, numero2) => {
    const resultado = numero1 + numero2;
    return new Promise (resolve =>{
        setTimeout(()=>{
            resolve(resultado)
        },800)
    });
}

operacionpromesa(1,3)
    .then(reault => console.log(reault))
*/

const miPromesa = new Promise((resolve, reject)=>{
    setTimeout(() => {
        const exito = true;
        if(exito){
            resolve("Operacion se genero");
        }else{
            reject("Error en la operacion")
        }
    }, 1000);
});