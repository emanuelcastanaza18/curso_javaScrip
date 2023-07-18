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

class Heroe extends Persona {
    clan = 'SIN CLAN';

    constructor(nombre, codigo, frase) {

        super(nombre, codigo, frase);

        this.clan = 'Programadores XD'
    }

    quiensoy() {
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quiensoy();
    }
}

// const persona1 = new Persona('Emanuel', 'Programador', 'Hola Ema');
// const persona1 = new Heroe();
const persona1 = new Heroe('Emanuel', 'Programador', 'Pasalo');

console.log(persona1);
persona1.quiensoy();