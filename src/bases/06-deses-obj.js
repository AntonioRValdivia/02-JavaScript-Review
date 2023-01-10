

// Desestructuración de objetos
// Asignación desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'soldado'
};

// Asignando cada atributo del objeto a una constante independiente, asignacion desestructurante
// const { edad, clave, nombre } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);



// Extrayendo de forma específica los elementos de un objeto, metiendolos en una constante individual y mostrándolos
const workingContext = ({clave, nombre, edad, rango = 'Capitan'}) =>{ // En el caso de que no exista el atributo de rango, se le asigna

    // console.log( nombre, edad, rango )

    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}


// Si queremos extraer objetos anidados y meterlos dentro de constates
const { nombreClave, anios, latlng: {lat, lng } } = workingContext(persona);

console.log(nombreClave, anios);
console.log( lat, lng );



