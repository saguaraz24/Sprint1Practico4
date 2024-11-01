import express from 'express';

// Crear una instancia de la aplicación
const app = express();

// Definir las rutas
app.get('/product/:category/:id', (req, res) => {
    const { category, id } = req.params;
    res.send(`Categoría: ${category}, ID del producto: ${id}`);
});

// Configurar el puerto
const PORT = 3000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
