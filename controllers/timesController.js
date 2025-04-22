const timesRepo = require('../repositorios/timesRepo');
const time_jogadorRepo = require("../repositorios/time_jogadorRepo");
const jogadoresRepo = require('../repositorios/jogadoresRepo');
const services = require('../services');

const timesController = {
    getTimeById(apiKey, id) {
        if (services.ApiKeyTest(apiKey)) {
            let time = timesRepo.getTimeById(id);
            return services.createOkResponse(time);
        } else {
            return services.createUnAuthResponse();
        }
    },

    getAllTimes(apiKey) {
        if (services.ApiKeyTest(apiKey)) {
            let times = timesRepo.getAllTimes();
            return services.createOkResponse(times);
        } else {
            return services.createUnAuthResponse();
        }
    },

    getJogadoresTime(apiKey, idTime) {
        if (services.ApiKeyTest(apiKey)) {
            let jogs = time_jogadorRepo.getJogadoresTime(idTime);
            let jogadores = [];
            jogs.forEach(id => {
                jogadores.push(jogadoresRepo.getJogadorById(id));
            });
            return services.createOkResponse(jogadores);
        } else {
            return services.createUnAuthResponse();
        }
    },

    addTime(apiKey, time) {
        if (services.ApiKeyTest(apiKey)) {
            timesRepo.addTime(time);
            return services.createOkResponse(undefined);
        } else {
            return services.createUnAuthResponse();
        }
    }
}

module.exports = timesController;