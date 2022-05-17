let listaDeTareas = require('./funcionesDeTareas');
switch (process.argv[2]) {
    case "listar":
        console.log("Listado de tareas");
        console.log("-------------------");
        let tareas = listaDeTareas.consumir();
        for (let i = 0; i < tareas.length; i++) {
            console.log(`${i + 1}. ${tareas[i].titulo}`);
        }
        break;
    case undefined:
        console.log("No hay acciones");
        break;
    default:
        console.log("Accion no reconocida");
}