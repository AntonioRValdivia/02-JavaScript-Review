

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321
    }
};

// console.table( persona )
// console.log( persona );



// Esta asignación que se hace a continuación no se debe hacer, ya que no se crea un nuevo objeto, se le está mandando la referencia y si se modeifica, se modifica el obj original
// En js todos los objetos se pasan por referencia y los primitivos por valor, en js todo es un obj menos los primitivos
// const persona2 = persona;
// persona2.nombre = 'Peter';



// Para tener un clon del obj, y que este apunte a un lugar distinto en memoria se usa el operador spread {...}

const persona2 = { ...persona }; // Se genera un obj distinto con base en el de persona.
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);