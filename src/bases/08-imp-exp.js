// import { heroes } from './data/heroes'
// import { heroes } from './data/heroes'                   // Formas de importar objetos de otro archivo
// import heroes, { owners } from './data/heroes';          // Importando un obj por defecto y un obj desesestructurando
// import { heroes, owners } from '../data/heroes';            // Al exportar varios obj al importarlos es necesario desestructurarlos todos
import { heroes } from '../data/heroes';            // Al exportar varios obj al importarlos es necesario desestructurarlos todos


// console.log( owners );  

// Find
export const getHeroeById = (id) => heroes.find( (hero) => hero.id === id );  

// console.log( getHeroeById(2) );


// Filter
export const getHeroeByOwner = (owner) => {
    return heroes.filter( (hero) => hero.owner === owner )
}


// console.log( getHeroeByOwner('Marvel') );

