//services/superheroesService.mjs 
import SuperheroesRepository from '../repository/superheroesRepository.mjs'; 
const repository = new SuperheroesRepository(); 
export function obtenerSuperheroePorId(id) { 
const superheroes = repository.obtenerTodos(); 
return superheroes.find (hero => hero.id == id); 
}
export function buscarSuperheroesPorAtributo(atributo, valor) { 

const superheroes = repository.obtenerTodos(); 
return superheroes.filter (hero => 
String (hero[atributo]).toLowerCase().includes(valor.toLowerCase())
);
}  
export function obtenerSuperheroesMayoresDe30() { 
const superheroes = repository.obtenerTodos(); 
return superheroes.filter(hero => 
hero.edad > 30 && hero.planetaOrigen === 'Tierra' && hero.poder.length >= 2
);
}