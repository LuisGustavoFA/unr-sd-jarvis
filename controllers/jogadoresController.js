// const jogadoresRepo = require('../repositorios/jogadoresRepo');
import jogadoresRepo from '../repositorios/jogadoresRepo.js';
// const Response = require('../models/Response');
import Response from '../models/Response.js';
import { ApiKeyTest, createOkResponse, createUnAuthResponse } from '../services/index.js';


const jogadoresController = {
    getJogadorById(apiKey, id) {
        if (ApiKeyTest(apiKey)) {
            let jogador = jogadoresRepo.getJogadorById(id);
            return createOkResponse(jogador);
        } else {
            return createUnAuthResponse();
        }
    },

    getAllJogadores(apiKey) {
        if (ApiKeyTest(apiKey)) {
            let jogadores = jogadoresRepo.getAllJogadores();
            return createOkResponse(jogadores);
        } else {
            return createUnAuthResponse();

        }
    },

    addJogador(apiKey, jogador) {
        if (ApiKeyTest(apiKey)) {
            jogadoresRepo.addJogador(jogador);
            return createOkResponse(undefined);
        } else {
            return createUnAuthResponse();
        }
        
    }
}

// module.exports = jogadoresController;
export default jogadoresController;