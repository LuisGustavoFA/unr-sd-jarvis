const jogadoresRepo = require('../repositorios/jogadoresRepo');
const Response = require('../models/Response');
const services = require('../services');

const jogadoresController = {
    getJogadorById(apiKey, id) {
        if (services.ApiKeyTest(apiKey)) {
            let jogador = jogadoresRepo.getJogadorById(id);
            return services.createOkResponse(jogador);
        } else {
            return services.createUnAuthResponse();
        }
    },

    getAllJogadores(apiKey) {
        if (services.ApiKeyTest(apiKey)) {
            let jogadores = jogadoresRepo.getAllJogadores();
            return services.createOkResponse(jogadores);
        } else {
            return services.createUnAuthResponse();

        }
    },

    addJogador(apiKey, jogador) {
        if (services.ApiKeyTest(apiKey)) {
            jogadoresRepo.addJogador(jogador);
            return services.createOkResponse(undefined);
        } else {
            return services.createUnAuthResponse();
        }
        
    }
}

module.exports = jogadoresController;