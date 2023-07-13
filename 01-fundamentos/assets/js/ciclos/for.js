
const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman',]

console.warn('For tradicional')
//for (variable ; condicion ; condicion ++)
for (let i = 0; i <= heroes.length - 1; i++) {
    console.log(heroes[i]);
}

console.warn('For in')
// for (variable in iterable u objeto)
for (let i in heroes) {
    console.log(heroes[i]);
}

console.warn('For of')
// for(variable of constante)
for (let i of heroes) {
    console.log(i);
}