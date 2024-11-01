import express from 'express';

// Crear una instancia de la aplicación
const app = express();

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Perfil del usuario con ID: ${userId}`);
});

// Configurar el puerto
const PORT = 3000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
