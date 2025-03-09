import { listarTareas, listarTareasCompletadas, crearTarea, completarTarea, eliminarTarea } from '../services/tareaService.mjs';
import { renderizarListaTareas, renderizarMensaje } from '../views/tareaVista.mjs';

// Controlador para listar todas las tareas
export function listarTareasController(req, res) {
    const tareas = listarTareas();
    res.send(renderizarListaTareas(tareas));
}

// Controlador para listar solo las tareas completadas
export function listarTareasCompletadasController(req, res) {
    const tareasCompletadas = listarTareasCompletadas();
    res.send(renderizarListaTareas(tareasCompletadas));
}

export function crearTareaController(req, res) { 
    console.log("Body recibido:", req.body); // Muestra qué datos llegan

    // Verificar que req.body realmente contenga datos
    if (!req.body || Object.keys(req.body).length === 0) {
        console.error("Error: Body vacío o no procesado correctamente");
        return res.status(400).json({ error: "El body está vacío" });
    }

    try { 
        console.log("Intentando extraer datos del body...");
        const { id, titulo, descripcion, completado } = req.body;
        console.log("Datos extraídos:", id, titulo, descripcion, completado);

        // if (!id) {
        //     return res.status(400).json({ error: "El ID es obligatorio" });
        // }
        if (!titulo) {
            return res.status(400).json({ error: "El título es obligatorio" });
        }

        console.log("Llamando a crearTarea...");
        const nuevaTarea = crearTarea(titulo, descripcion, completado);
        console.log("Tarea creada exitosamente:", nuevaTarea);

        return res.status(201).json(nuevaTarea);
    } catch (error) {
        console.error("Error en la creación de tarea:", error);
        return res.status(500).json({ error: error.message });
    }
}

// Controlador para marcar una tarea como completada
export function completarTareaController(req, res) {
    const { id } = req.params;
    completarTarea(parseInt(id));
    res.send(renderizarMensaje('Tarea marcada como completada'));
}

// Controlador para eliminar una tarea
export function eliminarTareaController(req, res) {
    const { id } = req.params;
    eliminarTarea(parseInt(id));
    res.send(renderizarMensaje('Tarea eliminada con éxito'));
}
