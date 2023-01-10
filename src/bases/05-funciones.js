// Funciones en js


// Forma antigua de declarar funciones (No recomendada)
// function saludar( nombre ){
//     return `Hola ${nombre}`;
// }


// Funcion anónima
const saludar = function( nombre ){
    return `Hola ${nombre}`;
}

// Función anónima de flecha
const saludar2 = ( nombre ) => {
    return `Hola ${nombre}`;
}

// Función anónima de flecha en una sola línea
const saludar3 = (nombre) => `Hola ${nombre}`;


// console.log( saludar('Goku') )

console.log( saludar2('Goku') );
console.log( saludar3('Vegeta') );


// Se puede evitar usar el return en determinados casos como el siguiente

// const getUser = () => {
//     return {
//         uid: 'ABC123',
//         username: 'masterchief123'
//     }
// }

const getUser = () => ({
        uid: 'ABC123',
        username: 'masterchief123'
});

const user = getUser();
console.log(user);

// Tarea 
// 1.Transforma a una función de flecha
// 2.Tiene que retornar un objeto implícito
// 3.Pruebas

const getUserActivo = ( nombre ) => ({
        uid: 'ABC567',
        username: nombre
});

const usuarioActivo = getUserActivo('Antonio');
console.log(usuarioActivo);