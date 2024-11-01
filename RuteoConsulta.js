import express from 'express';

// Crear una instancia de la aplicación
const app = express();

// Ruta GET con parámetro de consulta
// Solicitud: http://localhost:3000/search?q=javascript
app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`Resultados de búsqueda para: ${query}`);
});

// Ruta GET con múltiples parámetros de consulta
// Solicitud: http://localhost:3000/filter?type=book&minPrice=10&maxPrice=50
app.get('/filter', (req, res) => {
    const { type, minPrice, maxPrice } = req.query;
    res.send(`Filtrar por tipo: ${type}, rango de precios: ${minPrice} - ${maxPrice}`);
});
// Configurar el puerto
const PORT = 3000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
