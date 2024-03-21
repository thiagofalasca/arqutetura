class Aluno {

    #turmas = []

    constructor(nome, login, RA) {
        this.nome = nome;
        this.login = login;
        this.RA = RA;
    }

    add_turma (turma) {this.#turmas.push(turma)}

    get turma () {return this.#turmas}
}

export { Aluno }