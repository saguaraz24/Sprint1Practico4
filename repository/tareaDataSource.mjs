// Definimos una clase abstracta que actúa como interfaz para la persistencia de datos
export default class TareasDataSource {

    // Método abstracto para obtener todas las tareas
    obtenerTodas() {
        throw new Error('Este método debe ser implementado por la subclase');
    }

    // Método abstracto para guardar todas las tareas
    guardar(tareas) {
        throw new Error('Este método debe ser implementado por la subclase');
    }

    // Método abstracto para eliminar una tarea por su ID
    eliminar(id) {
        throw new Error('Este método debe ser implementado por la subclase');
    }
}
