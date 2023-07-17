

const fher = {
    nombre: 'Emanuel',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edadd: ${this.edad}`);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 15,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edadd: ${this.edad}`);
    }
}

// fher.imprimir();
///OK esto se debe de crear con la palabra new
function Persona(nombre, edad) {
    console.log('Se ejecuto esta linea');

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function () {
        console.log(`Nombre: ${this.nombre} - edadd: ${this.edad}`);
    }

}

const maria = new Persona('Maria', 18);
const melissa = new Persona('Melissa', 35);
console.log(maria);
maria.imprimir();
melissa.imprimir();