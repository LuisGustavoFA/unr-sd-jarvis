class Jogador {
    constructor(json) {
        this.id = json.id;
        this.nome = json.nome;
        this.posicao = json.posicao;
    }
}

module.exports = Jogador;