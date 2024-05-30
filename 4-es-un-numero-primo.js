/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

const esPrimo = (numero) => {
    let flag = true
    if (numero === 1) {
    } else {
        for (let i = 2; i < numero; i++) {
            numero%i === 0 ? flag = false : ''
        }
    }
    return flag
}

for (let i = 1; i <= 100; i++) {
    esPrimo(i) ? console.log(i) : ''
}

