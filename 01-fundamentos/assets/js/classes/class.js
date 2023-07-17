

class Persona {

    nombre = '';
    codigo = '';
    frase = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;


    }

}



const spiderman = new Persona('Emanuel', 'Programador', 'Hola Ema');
const iroman = new Persona('Nicolas', 'Programador', 'Hola Nico');
console.log(spiderman);
console.log(iroman);