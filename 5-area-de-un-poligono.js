class Poligono {
    calcularArea() {

    }
}

class Triangulo extends Poligono {
    constructor(base, altura) {
        super()
        this.base = base
        this.altura = altura
    }

    calcularArea() {
        return (this.base * this.altura) / 2
    }
}

class Cuadradro extends Poligono {
    constructor(lado) {
        super()
        this.lado = lado
    }

    calcularArea() {
        return this.lado ** 2
    }
}

class Rectangulo extends Poligono {
    constructor(base, altura) {
        super();
        this.base = base
        this.altura = altura
    }

    calcularArea() {
        return this.base * this.altura
    }
}

const miTriangulo = new Triangulo(3, 4)
console.log(miTriangulo.calcularArea())