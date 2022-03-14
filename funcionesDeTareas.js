let fs = require("fs"); //modulo necesario para leer un archivo

let archivoTareas = {
        leerArchivo : function(){
            let tareasJson = fs.readFileSync("tareas.json", "utf-8");
            return JSON.parse(tareasJson);
         },
         escribirJSON: function(tareas){ //se encargar de guardarlo en JSON
             fs.writeFileSync("tareas.json", JSON.stringify(tareas, null, " ")) // escribe la nuevaTarea en tareas.json en el archivo tareas.json guardo el archivo tareas convertido a json// le agrego 2 parametros extras para que se vea ordenada la matriz //tapame todas las tareas y escribime una sola tarea en tareas.json
         },
         guardarTarea: function(tarea){
            let tareas = this.leerArchivo(); //lee el array de tareas
            tareas.push(tarea); //agrega una nueva tarea al final del array
            this.escribirJSON(tareas) // guardamos la nuevaTarea de forma permanente en el JSON

         },
         filtrarPorEstado: function(estado){
             let tareas = this.leerArchivo(); //lee el array de tareas
             let tareasFiltradas = tareas.filter((tarea) => { return tarea.estado === estado}); // utilizamos un filter para crear el nuevo array ya filtrado
             return tareasFiltradas; //devolvemos el array ya filtrado
         }
}


module.exports = archivoTareas;