const jogadoresRepo = require('../repositorios/jogadoresRepo');
const Response = require('../models/Response');

const jogadoresController = {
    ApiKeyTest(key) {
        return (key == "ironman");
    },

    getJogadorById(apiKey, id) {
        if (this.ApiKeyTest(apiKey)) {
            let jogador = jogadoresRepo.getJogadorById(id);
            let resposta = new Response(200, jogador, "OK");
            return resposta;
        } else {
            return new Response(403, undefined, "Não Autorizado");
        }
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

    addJogador(apiKey, jogador) {
        if (this.ApiKeyTest(apiKey)) {
            jogadoresRepo.addJogador(jogador);
            return new Response(200, undefined, "OK")
        } else {
            return new Response(403, undefined, "Não Autorizado");
        }
        
    }
}

module.exports = jogadoresController;