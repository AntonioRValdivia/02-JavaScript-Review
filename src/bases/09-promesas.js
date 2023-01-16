import { getHeroeById } from './bases/08-imp-exp';

// const promesa = new Promise( (resolve, reject) => {  // Argumentos que lleva toda promesa, no importa el nombre pera la convención es que lleve esos
//     // resolve es para cuando la promesa se cumple y reject para cuando no

//     setTimeout ( () => {
        
//         const heroe = getHeroeById(2);
//         resolve (heroe);
//         // reject('No se pudo encontrar al heroe');
//     }, 2000 )
// });



// // Como la promesa se cumple se emplea el then que se acciona cuando se cumple la promesa(corre resolve)
// // catch se usa cuando no se cumple la promesa
// // finally despues de la resolucion cualquiera sea el caso
// promesa.then( (heroe) => {
//     console.log('heroe', heroe)
// })
// .catch( err => console.warn( err ) );

const getHeroeByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) => {  
        
        setTimeout ( () => {
            
            const heroe = getHeroeById( id );
            
            if (heroe) {
                resolve (heroe);
            }else{
                reject('No se pudo encontrar al heroe');
            }

        }, 2000 )
    });
}

getHeroeByIdAsync(1)
            .then( console.log )
            .catch( console.warn );
