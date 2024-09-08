//arreglo para poder almacenar tareas
let tareas = [];

//funcion para mostrar opciones
function mostrarMenu(){
    return parseInt(prompt(`
    "Opcion disponibles"
    1.- Agregar tarea
    2.- Ver todas las tareas
    3.- Marcar mis tareas como completadas
    4.- Salir
    `));
}

//funcion para agregar tarea
function agregarTarea(){
    let nombre = prompt("Ingresa el nombre de la tarea");
    if(nombre){
        let tarea = {
            nombre: nombre,
            completada: false
        };
        tareas.push(tarea);
        alert("Tarea agregada satisfactoriamente");
    }else{
        alert("Nombre de la tarea no puede estar vacio");
    }
}

//funcion para ver las tareas
function verTarea(){
    if(tareas.length === 0){
        alert("No hay tareas en la lista");
    }else{
        let mensaje = "Lista de tareas:  \n";
        tareas.forEach((tarea, index)=>{
            mensaje += `${index + 1}.- ${tarea.nombre}[${tarea.completada? "completada":"Pendiente"}]\n`;
        });
        alert (mensaje);
    }
}
  
//Funcion para agregar tarea completada

function marcarTareaCompletada(){
    let numero = parseInt(prompt("Introduce el numero para mandar la tarea como completada"));
    if(numero > 0 && numero <= tareas.length){
        tareas[numero-1].completada = true;
        alert(`La tarea $({numero-1}.nombre)`)
    }else{
        alert("Numero de tarea no valida (Fuera de rango......)")
    }
}


//funcion principal para manejar el programa
function iniciarPrograma(){
    let continuar = true;
    while(continuar){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1:
                agregarTarea();
                break;
            case 2:
                verTarea();
                break;
            case 3:
                marcarTareaCompletada();
                break;
            case 4:
                alert("Saliendo del programa...");
                continuar = false;
                break;
            default:
                alert("Opcion no valida. Intentar nuevamente");
        }
    }
    alert("Programa finalizado");
}
iniciarPrograma();