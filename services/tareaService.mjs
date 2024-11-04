// Importa la capa de persistencia (repositorio)
import TareaRepository from '../repository/tareaRepository.js';
import Tarea from '../models/tarea.js'; // Importa el modelo de Tarea

// Instancia el repositorio para manejar las tareas
const tareaRepo = new TareaRepository();

// Servicio para obtener todas las tareas
export function listarTareas() {
    // Obtiene todas las tareas desde la capa de persistencia
    return tareaRepo.obtenerTodas();
}

// Servicio para obtener solo las tareas completadas
export function listarTareasCompletadas() {
    // Obtiene todas las tareas desde la capa de persistencia
    const tareas = tareaRepo.obtenerTodas();
    // Filtra las tareas completadas
    return tareas.filter(tarea => tarea.completado);
}

// Servicio para crear una nueva tarea
export function crearTarea(titulo, descripcion, completado = false) {
    // Obtiene todas las tareas
    const tareas = tareaRepo.obtenerTodas();
    // Crea una nueva instancia del modelo Tarea
    const nuevaTarea = new Tarea(id, titulo, descripcion, completado);
    // Valida que la tarea tenga un título válido
    nuevaTarea.validar();
    // Añade la nueva tarea a la lista de tareas
    tareas.push(nuevaTarea);
    // Guarda la lista actualizada de tareas en el archivo
    tareaRepo.guardar(tareas);
}

// Servicio para marcar una tarea como completada
export function completarTarea(id) {
    // Obtiene todas las tareas
    const tareas = tareaRepo.obtenerTodas();
    // Encuentra la tarea por ID
    const tarea = tareas.find(tarea => tarea.id === id);
    // Si la tarea existe, la marca como completada
    if (tarea) {
        tarea.completar();
        // Guarda los cambios en el archivo
        tareaRepo.guardar(tareas);
    }
}

// Servicio para eliminar una tarea
export function eliminarTarea(id) {
    // Obtiene todas las tareas
    let tareas = tareaRepo.obtenerTodas();
    // Elimina la tarea que coincide con el ID
    tareas = tareas.filter(tarea => tarea.id !== id);
    // Guarda la lista actualizada de tareas
    tareaRepo.guardar(tareas);
}
