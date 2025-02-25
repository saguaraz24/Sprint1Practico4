
import express from 'express';
const app = express();
const port = 3000;

// Ruta GET para el home
// Solicitud: http://localhost:3000/
app.get('/', (req, res) => {
    res.send('Página de inicio');
});

 //Ruta GET para recibir datos simples
 //Solicitud:http://localhost:3000/data
 app.get(`/data`,(req,res)=>{
 res.send(`Datos Recibidos`);
 });

 // Ruta GET con parámetro de ruta
 //Solicitud: http://localhost:3000/user/123
 app.get(`/user/:id`, (req, res) => {
    const userId = req.paramt.id;
    console.log(`ID del usuario recibido: $(userID)`);
    res.send (`Perfil del usuario con ID: $(userID)`);

 });

 app.get(`/product/:category/:id`, (req,res) => {
    const {category,id} =  req.params;
    res.send(`Categoría: ${category}, ID del producto: ${id}`)
 })

//Ruta get con parámetro de consulta
//Solicitud: http://localhost:3000/search?q=javascript
app.get(`/search`,(req,res)=>{
    const query = req.query.query
    res.send(`Resultados de búsqueda para: ${query}`);
});
//Ruta GET con múltiples parámetros de consulta
// Solicitud: http://localhost:3000/filter?type=book&minPrice=10&maxPrice=50
app.get(`/filter`,(req,res)=>{
    const{type, minPrice, maxPrice}=req.query;
    res.send(`Filtrar por tipo: ${type},
        rango de precios: ${minPrice} - ${maxPrice}`);
});

app.get(`/profile`, (req,res)=>{
    const edad = req.query.edad;
    console.log(`Edad recibida: ${edad}`);
    res.send(`Edad del Perfil: ${edad}`);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});