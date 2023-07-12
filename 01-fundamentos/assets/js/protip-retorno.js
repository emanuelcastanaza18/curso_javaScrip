// function crearPersona(nombre,apellido){
//     return{nombre,apellido}
// }

// const persona = crearPersona('Emanuel', 'Castaniaza');
// console.log(persona);

const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona('Emanuel', 'Castaniaza');
console.log(persona);

///Otro Ejemplo

// function imprimeArgumentos() {
//     console.log(arguments);
// }

// imprimeArgumentos(10, true, false, 'Emanuel', 'Hello');

///Ahora con una funcion de flecha

// function imprimeArgumentos() {
//     console.log(arguments);
// }

// const imprimeArgumentos2 = (...args) => {
//     console.log(args);
// }

// imprimeArgumentos2(10,true,false,'Emanuel','Castaniaza');

///Para llamar a un parametro como tal
// function imprimeArgumentos() {
// console.log(arguments);
// }
// 
// const imprimeArgumentos2 = (edad, ...args) => {
// console.log({ edad, args });
// }
// 
// imprimeArgumentos2(10, true, false, 'Emanuel', 'Castaniaza');

///Otro ejemplo
// function imprimeArgumentos() {
//     console.log(arguments);
// }

// const imprimeArgumentos2 = (edad, ...args) => {
//     return args;
// }

// const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Emanuel', 'Castaniaza');
// console.log({ casado, vivo, nombre, saludo });


/// Otro ejemplo

// const Tony = {
//     nombre: 'Emanuel Castaniaza',
//     codeName: 'De Jesus',
//     vivo: false,
//     edad: 24,
//     trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
// };

// const imprmePropidades = (personaje) => {
//     console.log('nombre', personaje.nombre);
//     console.log('codeName', personaje.codeName);
//     console.log('vivo', personaje.vivo);
//     console.log('trajes', personaje.trajes);
// }

// imprmePropidades(Tony);

//Otra forma de hacerlo

const Tony = {
    nombre: 'Emanuel Castaniaza',
    codeName: 'De Jesus',
    vivo: false,
    edad: 24,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

const imprmePropidades = ({nombre,codeName,vivo,edad,trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprmePropidades(Tony);