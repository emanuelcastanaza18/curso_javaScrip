const regresaTrue = () => {
    console.log('Regresa True');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negacion');
console.log(true);
console.log(!true);
console.log(!false);

console.log(!regresaFalse());

console.warn('And'); //True si todos los valores son verdaderos
console.log(true && true);
console.log(true && false);
console.log(true && !false);

console.log('==========================');
console.log(regresaFalse() && regresaTrue());
console.log(regresaTrue() && regresaFalse());

console.log('=========&&=========');
regresaTrue() && regresaFalse()
regresaFalse() && regresaTrue()
console.log('4 condiciones ', true && true && true && false);

console.warn('Or');
console.log(true || false);
console.log(false || false);

console.log(regresaTrue() || regresaFalse());
console.log(regresaFalse() || regresaTrue());
console.log('4 condiciones ', true || true || true || false);



console.warn('Asignaciones');

const soyUndefine = undefined;
const soyNull = null;
const soyFalso = false;

// const a1 = true && 'Hello Word' && 150;
const a1 = false && 'Hello Word' && 150;
// const a2 = 'Hello' && 'Word'
const a2 = 'Hello' && 'Word' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy falso'
const a4 = soyFalso || soyUndefine || soyNull || 'Ya no soy falso de nuevo'
const a5 = soyFalso || soyUndefine || regresaTrue() || 'Ya no soy falso de nuevo'


console.log({ a1, a2, a3, a4, a5 });

if (regresaFalse() && regresaTrue() && (true || false || true)) {
    console.log('Hacer Algo');
} else {
    console.log('Hacer otra Cosa');
}