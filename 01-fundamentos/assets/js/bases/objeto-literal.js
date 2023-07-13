///Para obtener mayor informacion de los object
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object

// let personaje = {
//     nombre: 'Emanuel Castaniaza',
//     codeName: 'De Jesus',
//     vivo: false,
//     edad: 24,
//     coords: {
//         lat: 34.034,
//         lng: -118.70
//     },
//     trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
//     direccion: {
//         zip: '10880, 90265',
//         ubicacion: 'Ma;ibu, California'
//     },
//     'ultima-pelicula': 'Infinity War'
// };

// console.log({ personaje });
// console.log('Nombre', personaje.nombre);
// console.log('Nombre', personaje['nombre']);
// console.log('Edad', personaje.edad);
// console.log('Coord', personaje.coords);
// console.log('Lat', personaje.lat);
// console.log('No. Trajes', personaje.trajes.length);
// console.log('ultimo traje', personaje.trajes[personaje.trajes.length - 1]);

// const x = 'vivo';
// console.log('Vivo', personaje[x]);


// console.log('Ultrima Pelicula', personaje["ultima-pelicula"]);


///Mas detalles

//Para borrar una propiedad o bien una palabra

// delete personaje.edad;

// console.log(personaje);

///Para trabajar un objeto como si fuera un arreglo

// const entriesPares = Object.entries(personaje);
// console.log(entriesPares);

//Si necesitamos crear una nueva propiedad en el objeto o 
// que va a suceder o se va a crear al momento de ejecucion
// personaje.casado = true;

// const entriesPares = Object.entries(personaje);
// console.log(entriesPares);

//Para no mutar el objeto es decir una vez creado el objeto no se pueda cambiar

const personaje = {
    nombre: 'Emanuel Castaniaza',
    codeName: 'De Jesus',
    vivo: false,
    edad: 24,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Ma;ibu, California'
    },
    'ultima-pelicula': 'Infinity War'
};

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);


console.log(personaje);

//Congela como estaba en el momento en el cual se hace el cambio
Object.freeze(personaje);

personaje.dinero = 1000000000;
personaje.casado = false;

console.log(personaje);

//Para cambiar las propiedades

personaje.direccion.ubicacion = 'Costa Rica';


///Listado de todas las propiedaddes

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);

console.log(propiedades, valores);