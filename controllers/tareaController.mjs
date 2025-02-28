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

// Controlador para crear una nueva tarea
// export function crearTareaController(req, res) {
//     const { id, titulo, descripcion, completado } = req.body;
//     crearTarea(id, titulo, descripcion, completado);
//     res.send(renderizarMensaje('Tarea creada con éxito'));
// }
export function crearTareaController(req, res) {
    console.log("Body recibido:", req.body); // Para ver qué datos llegan
    
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: "El body está vacío" });
    }
   // res.json({ mensaje: "Solicitud recibida" });
    const { id, titulo, descripcion, completado } = req.body;
    if (!id) {
        return res.status(400).json({ error: "El ID es obligatorio" });
    }
    if (!titulo) {
        return res.status(400).json({ error: "El título es obligatorio" });
    }
try { 
    //const tarea = { id, titulo, descripcion, completado };
    const nuevaTarea = crearTarea(id, titulo, descripcion, completado);
    return res.status(201).json(nuevaTarea);
} catch (error)
{
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
