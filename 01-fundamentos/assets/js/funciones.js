
// function saludar() {
//     console.log('Hello Emanuel');
// }

// saludar();

//Otra forma de definir funciones
//Funcion anonima se le conoce a este

// function saludar() {
//     console.log('Hello Emanuel');
// }

// const saludar2 = function() {
//     console.log('Hello Emanuel');
// }

// saludar2();
// saludar2();
// saludar2();
///Lo que tiene a favor es que al momento de ser una constante no hay manera de que la
///Funcion constante pueda ser reutilizado en la aplicacion

///Los argumentos
// function saludar(nombre) {
//     console.log('Hello' + nombre);
// }


// saludar(' Emanuel');

// Como funcionaria con la constante 
// function saludar(nombre) {
//     console.log(arguments);
//     console.log('Hello' + nombre);
// }

// saludar(' Emanuel', 24, true, 'Guetamala');

// const saludar2 = function (nombre) {
//     console.log('Hello' + nombre);
// }
// saludar2(' Emanuel');


///Funciones de flecha

// function saludar(nombre) {
// console.log(arguments);
// console.log('Hello' + nombre);
// }
// 
// const saludar2 = function (nombre) {
// console.log('Hello' + nombre);
// }
// 
// const saludaFlecha = () => {
// console.log('Hola Emanuelk');
// }
// 
// const saludaFlecha2 = nombre  => {
// console.log('Hola' + nombre);
// }
// 
// saludar(' Emanuel', 24, true, 'Guetamala');
// 
// saludaFlecha();
// saludaFlecha2(' Nicolas');

///Para los retornos
function saludar(nombre) {
    // console.log(arguments);
    // console.log('Hello' + nombre);
    // return 10;
    /// Tambien se pueden enviar arreglos
    return [1, 2, 3, 4, 5];

    ///Esto nunca se va a ejecutar
    console.log('Soy un codigo');
}

const saludar2 = function (nombre) {
    console.log('Hello' + nombre);
}

const saludaFlecha = () => {
    console.log('Hola Emanuelk');
}

const saludaFlecha2 = nombre => {
    console.log('Hola' + nombre);
}

const retornoDeSaludar = saludar(' Emanuel', 24, true, 'Guetamala');
// console.log(retornoDeSaludar);

// saludaFlecha();
// saludaFlecha2(' Nicolas');


// function sumar(a, b) {
//     return a + b;
// }

// console.log(sumar(1, 2));

//funcion de flecha 2

function sumar(a, b) {
    return a + b;
}

const sumar2 = (a, b) => { return a + b; }

console.log(sumar2(1, 2));
