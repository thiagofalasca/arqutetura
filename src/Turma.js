class Turma {

    #codigo
    #nota

    constructor(codigo, nota) {
        this.#codigo = codigo
        this.#nota = nota
    }

    aprovado() { return this.#nota >= 6 }

    get nota() { return this.#nota }
    set nota(nota) { this.#nota = nota }

    get codigo() { return this.#codigo }
    set codigo(codigo) { this.#codigo = codigo }

}

export { Turma }