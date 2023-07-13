/**
 * Día de semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9
 */

//Entra a un sitio web, para consultar si está abierto hoy....
// const dia = 1;
// const horaActual = 11;


// let horaApertura;
// let mensaje;

// if (dia === 0 || dia === 6) {
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Día de semana');
//     horaApertura = 11;
// }


// if (horaActual >= horaApertura) {
//     mensaje = 'Esta abierto';
// } else {
//     mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`;
// }

// console.log({ horaApertura, mensaje });

///Con un .include

// const dia = 6;
// const horaActual = 11;


// let horaApertura;
// let mensaje;

// if ([0, 6].includes(dia)) {
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Día de semana');
//     horaApertura = 11;
// }


// if (horaActual >= horaApertura) {
//     mensaje = 'Esta abierto';
// } else {
//     mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`;
// }

// console.log({ horaApertura, mensaje });

///If ternario
const dia = 1;
const horaActual = 10;


let horaApertura;
let mensaje;

horaApertura = ([0, 6].includes(dia))
    ? 9 : 11;

mensaje = (horaActual >= horaApertura)
    ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${horaApertura}`;

console.log({ horaApertura, mensaje });