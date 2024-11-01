
import express from 'express';
const app = express();
const port = 3000;

// Ruta GET para el home
// Solicitud: http://localhost:3000/
app.get('/', (req, res) => {
    res.send('Página de inicio');
});

// Ruta GET para recibir datos simples
// Solicitud: http://localhost:3000/data
app.get('/data', (req, res) => {
    res.send('Datos recibidos');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});