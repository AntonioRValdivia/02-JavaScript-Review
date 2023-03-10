const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

const owners = ['DC', 'Marvel'];

// export const owners = ['DC', 'Marvel'];      // Exportando un obj específico, se requiere desestructurar
// export default heroes;                       // Exportando un obj por defecto

// Exportando varios obj 
export {
    heroes,
    owners
};     

// export {
//     heroes as default,   // Otra forma de exportarlos si del otro lado queremos tenerlos por separado
//     owners
// };          