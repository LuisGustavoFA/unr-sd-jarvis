const jogadoresRepo = require('../repositorios/jogadoresRepo');
const Response = require('../models/Response');

const jogadoresController = {
    ApiKeyTest(key) {
        return (key == "ironman");
    },

    getJogadorById(id) {
        return jogadoresRepo.getJogadorById(id);
    },

    getAllJogadores(apiKey) {
        if (this.ApiKeyTest(apiKey)) {
            let jogadores = jogadoresRepo.getAllJogadores();
            let resposta = new Response(200, jogadores, "OK");
            return resposta;
        } else {
            return new Response(403, undefined, "Não Autorizado");
        }
    },

    addJogador(jogador) {
        jogadoresRepo.addJogador(jogador);
    }
}

module.exports = jogadoresController;