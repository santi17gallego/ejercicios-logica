/*
 * Crea una función que analice una matriz 3x3 compuesta por "X" y "O"
 * y retorne lo siguiente:
 * - "X" si han ganado las "X"
 * - "O" si han ganado los "O"
 * - "Empate" si ha habido un empate
 * - "Nulo" si la proporción de "X", de "O", o de la matriz no es correcta.
 *   O si han ganado los 2.
 * Nota: La matriz puede no estar totalmente cubierta.
 * Se podría representar con un vacío "", por ejemplo.
 */

const tablero = new Array('X', 'O', '',
                            '', 'X', '',
                            '', '', ''
)

const ganadoras = new Array([0,1,2],
                            [3,4,5],
                            [6,7,8],
                            [0,3,6],
                            [1,4,7],
                            [2,5,8],
                            [0,4,8],
                            [2,4,6]
)


const contar = (elemento, tablero) => {
    return tablero.filter(e => e === elemento).length
}

const esNulo = (tablero) => {
    totalX = contar('X',tablero)
    totalO = contar('O',tablero)
    if (totalX > 5 || totalO > 5) {
        return true
    }
    else if (totalX>totalO && (totalX-1 !== totalO)) {
        return true
    } else if (totalO>totalX && (totalO-1 !== totalX)) {
        return true
    } else {
        return false
    }
}

const verificarGanadoras = (tablero) => {

    if(esNulo(tablero)) {
        return 'Nulo'
    }

    let numeroDeGanadores = 0
    let ultimoGanador

    for (let ganadora of ganadoras) {
        const [a,b,c] = ganadora
        if (
            tablero[a] === tablero[b] &&
            tablero[a] === tablero[c]
        ) {
            numeroDeGanadores++
            ultimoGanador = tablero[a]
        }
    }
    if(numeroDeGanadores === 1) {
        return ultimoGanador
    } else if(numeroDeGanadores !== 0) {
        return 'Nulo'
    } else {
        return 'Empate'
    }

}

console.log(verificarGanadoras(tablero))