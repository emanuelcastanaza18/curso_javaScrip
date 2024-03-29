

class Persona {

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log('Hello a todos, soy un metodo statico');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    ///set y get
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida de ${this.nombre} es ${this.comida}`
    }



    quiensoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quiensoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }

}



const spiderman = new Persona('Emanuel', 'Programador', 'Hola Ema');
const iroman = new Persona('Nicolas', 'Programador', 'Hola Nico');


// console.log(spiderman);
// console.log(iroman);
// spiderman.quiensoy();
// iroman.quiensoy();
spiderman.miFrase();
// iroman.miFrase();

spiderman.setComidaFavorita = 'Pizza';

// console.log(spiderman.getComidaFavorita);

// console.log(spiderman);
// Persona._conteo = 2;
console.log('Conteo statico', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = 'Hola Mundo';
console.log(Persona.propiedadExterna);
console.log(Persona);