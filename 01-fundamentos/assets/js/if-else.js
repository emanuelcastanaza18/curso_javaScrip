

// let a = 0;


// if (a >= 10) {
//     console.log('A es mayor o igual a 10');
// } else {
//     console.log('A es menor a 10');
// }


// console.log('Fin de programa');

///Ejercicio 2 

// let a = 0;


// if (a >= 10) {
//     console.log('A es mayor o igual a 10');
// } else {
//     console.log('A es menor a 10');
// }
// //Agregando tiempo
// const hoy = new Date();
// console.log(hoy);

//Ejemplo 3

let a = 0;

if (a >= 10) {
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}
const hoy = new Date();
let dia = hoy.getDate();
console.log({ dia });

//El igual nos regresa una asignacion y la asignacion regresa el valor de lo que asignemos
//El Doble igual nos dice que no importa el tipo si es numero o string
//El triple === nos sirve para Evaluar que no solo los valores internos sean los mismos sino que el tipado de los mismo
//tiene que ser identico
// if (dia === 0) {
//     console.log('Domingo');
// } else {
//     if (dia === 1) {

//         console.log('Lunes');
//     } else {
//         console.log('No es lunes ni domingo');
//     }
// }

///Con un elseif
if (dia === 0) {
    console.log('Domingo');
} else if (dia === 1) {
    console.log('Lunes');
} else if (dia === 2) {
    console.log('martes');
} else {
    console.log('No es lunes martes o domingo');
}

///Tarea Laboratoio-Alternativa if else
//Ejemplo con objetos
// dia = 6;

// const diasLetras = {
//     0: 'Domingo',
//     1: 'Lunes',
//     2: 'Martes',
//     3: 'Miercoles',
//     4: 'Jueves',
//     5: 'Viernes',
//     6: 'Sabado',
// }

// console.log(diasLetras[dia] || 'Dia no es valido');
///Otro ejemplo seria
// dia = 6;

// const diasLetras = {
//     0: () => 'Domingo - 0',
//     1: () => 'Lunes - 1',
//     2: () => 'Martes - 2',
//     3: () => 'Miercoles - 3',
//     4: () => 'Jueves - 4',
//     5: () => 'Viernes - 5',
//     6: () => 'Sabado - 6',
// }

// console.log(diasLetras[dia]());

///Otro ejemplo seria 
dia = 6;

const diasLetras2 = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
];


console.log(diasLetras2[dia]);

