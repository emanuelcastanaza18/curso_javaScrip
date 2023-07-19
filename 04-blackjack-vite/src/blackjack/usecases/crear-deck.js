import _ from 'underscore'


/**
 * Esta funcion crea un nuevo deck
 * @param {Array<string>} tiposDeCarta Ejemplo ['C', 'D', 'H', 'S'];
 * @param {Array<String>} tiposEspeciales  Ejemplo ['A', 'J', 'Q', 'K'];
 * @returns {Array} retorna un nuevo deck de cartas
 */


// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {


    if (!tiposDeCarta) throw new Error('TiposDeCarta es obligatorio');


    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposDeCarta) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle(deck);
    return deck;
}
