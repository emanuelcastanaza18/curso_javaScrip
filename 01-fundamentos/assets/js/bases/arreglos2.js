let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono']
console.log('Largo:', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log({ primero, ultimo });

//El forEach ejecuta una instruccion por cada uno de los elementos que esten dentro de los elementos
juegos.forEach((elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
});

//para aniadir un juego al final
let nuevaLongitud = juegos.push('F-Zero');
console.log({ nuevaLongitud, juegos });

//Para aniadir un juego al principio

nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({ nuevaLongitud, juegos });

// Para borrar juegos
let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });


// Para borrar un elemento en una posicion especifica
// let pos = 1;

// let juegosBorrados = juegos.splice(pos, 2);
// console.log({ juegosBorrados, juegos });

let pos = 1;

console.log(juegos);
let juegosBorrados = juegos.splice(pos, 2);
console.log({ juegosBorrados, juegos });

//Para saber la posicion indice 

let metroidIndex = juegos.indexOf('Metroid');
console.log({ metroidIndex });

