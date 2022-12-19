
// Arreglos en js

// Forma poco comun de hacer arreglos.
// const array = new Array(); 



// Forma comun de hacer arrglos
const array = [1,2,3,4];




//No meter datos así al array porque modifica el obj principal
// array.push(1);
// array.push(2);
// array.push(3);
// array.push(4);


// Rompiendo referencia en los arreglos para crear clones a partir de otros

// Operador spread
let array2 = [ ...array, 5 ]; // Al romper la referncia se meten los valores dentro del nuevo array y se agrega un nuevo dato al final

// Método map
const array3 = array2.map( (numero) => {
    return numero * 2;
})


console.log( array );
console.log( array2 );
console.log( array3 );