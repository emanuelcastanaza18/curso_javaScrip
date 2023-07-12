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