// const timesRepo = require('../repositorios/timesRepo');
import timesRepo from '../repositorios/timesRepo.js';
// const time_jogadorRepo = require("../repositorios/time_jogadorRepo");
import time_jogadorRepo from '../repositorios/time_jogadorRepo.js';
// const jogadoresRepo = require('../repositorios/jogadoresRepo');
import jogadoresRepo from '../repositorios/jogadoresRepo.js';
// const services = require('../services');
import { ApiKeyTest, createOkResponse, createUnAuthResponse } from '../services/index.js';

const timesController = {
    getTimeById(apiKey, id) {
        if (ApiKeyTest(apiKey)) {
            let time = timesRepo.getTimeById(id);
            return createOkResponse(time);
        } else {
            return createUnAuthResponse();
        }
    },

    getAllTimes(apiKey) {
        if (ApiKeyTest(apiKey)) {
            let times = timesRepo.getAllTimes();
            return createOkResponse(times);
        } else {
            return createUnAuthResponse();
        }
    },

    getJogadoresTime(apiKey, idTime) {
        if (ApiKeyTest(apiKey)) {
            let jogs = time_jogadorRepo.getJogadoresTime(idTime);
            let jogadores = [];
            jogs.forEach(id => {
                jogadores.push(jogadoresRepo.getJogadorById(id));
            });
            return createOkResponse(jogadores);
        } else {
            return createUnAuthResponse();
        }
    },

    addTime(apiKey, time) {
        if (ApiKeyTest(apiKey)) {
            timesRepo.addTime(time);
            return createOkResponse(undefined);
        } else {
            return createUnAuthResponse();
        }
    }
}

// module.exports = timesController;
export default timesController;