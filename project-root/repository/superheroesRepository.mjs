//repository/superheroes Repository.mjs 
import fs from 'fs'; 
import path from 'path'; 
import { fileURLToPath} from 'url'; 
import SuperheroesDataSource from './superheroesDataSource.mjs'; 
const __filename = fileURLToPath (import.meta.url); 
const __dirname = path.dirname(__filename); 
export default class SuperheroesFileRepository extends SuperheroesDataSource { 
constructor() { 
super(); 
this.filePath = path.join(__dirname, '../superheroes.txt'); 
}
obtenerTodos() { 
const data = fs.readFileSync(this. filePath, 'utf-8'); 
return JSON.parse(data); 
// Convierte el archivo JSON en un array de objetos JS 
} 
} 
