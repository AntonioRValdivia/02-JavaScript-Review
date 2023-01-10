const personajes = ['Goku', 'Vegeta', 'Trunks']

const [ p1 ] = personajes;

console.log( p1 );

// Cuando queramos refactorizar el nombre de una variable sin tener que ir línea por línea, se puede hacer uso de F2
// Sobre el nombre de la variable a cambiar y presionar F2 para cambiar la referencia




// Como los arreglos están indexados a 0 no se puede hacer la referencia a un elemento en específico con una llave
// Para eso se hace como a continuación
const [ , , p3 ] = personajes;
console.log( p3 );



// La función me regresa un arreglo y con la desestructuración meto cada uno de sus elementos en una const
const retornoArreglo = () => {
    return [ 'ABC', 123 ];
}

const [ letras, numeros ] = retornoArreglo();
console.log(letras, numeros);


// Tarea
// 1. El primer valor del arr se llamará nombre
// 2. Se llamará setNombre
const usingState = ( valor ) => {
    return[ valor, () => { console.log('Hola Mundo') } ];
}

const [ nombre, setNombre ] = usingState( 'Goku' );
console.log(nombre);
setNombre();