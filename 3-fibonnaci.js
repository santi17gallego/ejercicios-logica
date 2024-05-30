/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

const fibonacci = () => {
    let a = 0
    let b = 1
    console.log(a)
    console.log(b)
    for (let i = 0; i < 48; i++) {
        aux = a + b
        console.log(aux)
        a = b
        b = aux
    }
}

fibonacci()