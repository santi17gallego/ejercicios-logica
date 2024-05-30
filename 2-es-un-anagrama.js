/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

const prompt = require("prompt-sync")({sigint:true});

const anagrama = (word1, word2) => {
    if(word1 === word2) {
        return false
    }

    word1 = word1.split('').sort().join('')
    word2 = word2.split('').sort().join('')
    return word1 ===  word2
}

let word1 = 'hola'
let word2 = 'hola'

console.log(anagrama(word1,word2))

// word1 = prompt('Palabra 1: ')
// word2 = prompt('Palabra 2: ')

