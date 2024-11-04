export default class Tarea {
    constructor(id, titulo, descripcion, completado = false) {
        this.id = id; // Identificador único de la tarea
        this.titulo = titulo; // Título de la tarea
        this.descripcion = descripcion; // Descripción de la tarea
        this.completado = completado; // Estado de completado, por defecto es false
    }

    // Método para marcar una tarea como completada
    completar() {
        this.completado = true; // Cambia el estado de completado a true
    }

    // Método para validar que el título de la tarea no esté vacío
    validar() {
        if (!this.titulo || this.titulo.trim() === '') {
            throw new Error('El título de la tarea es obligatorio.');
        }
    }
}
