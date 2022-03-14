/* let fs = require("fs");
 */
/* let tareasJson = fs.readFileSync("tareas.json", "utf-8");

let tareas = JSON.parse(tareasJson); */

const { leerArchivo } = require("./funcionesDeTareas");
let funcionesDeTareas = require("./funcionesDeTareas")

let accion = "filtrar";
let filtro = "En proceso";

switch (accion) {
    case "listar":
       // console.table(funcionesDeTareas.leerArchivo()); //leerArchivo es un metodo
        let tareas = funcionesDeTareas.leerArchivo();
        tareas.forEach(tarea => {console.log(tarea)}); //tarea representa el elemento actual que se esta iterando en la matriz u obj lit
        break;
    case "escribir": //aca pongo la tarea que quiero agregar
        let tareaNueva = {
            titulo : "Hacer practica 6",
            estado : "En proceso"
        };
        funcionesDeTareas.guardarTarea(tareaNueva);
        break;
    case "filtrar": //llamamos a la funcion filtrarPorEstado
        let tareasFiltradas = funcionesDeTareas.filtrarPorEstado(filtro);
        console.log(tareasFiltradas);
        break;
    case "":
        console.log("Atención, tenés que pasar una acción");
        break;
    default:
        console.log("No entiendo lo que querés hacer");
        break;
}