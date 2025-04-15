const timesRepo = require('../repositorios/timesRepo');
const time_jogadorRepo = require("../repositorios/time_jogadorRepo");
const jogadorRepo = require('../repositorios/jogadoresRepo');
const Response = require('../models/Response');
const jogadoresRepo = require('../repositorios/jogadoresRepo');

const timesController = {
    ApiKeyTest(key) {
        return (key == "ironman");
    },

    getTimeById(id) {
        return timesRepo.getTimeById(id);
    },

    getAllTimes(apiKey) {
        if (this.ApiKeyTest(apiKey)) {
            let times = timesRepo.getAllTimes();
            let resposta = new Response(200, times, "OK");
            return resposta;
        } else {
            return new Response(403, undefined, "Não Autorizado");
        }
    },

    getJogadoresTime(apiKey, idTime) {
        if (this.ApiKeyTest(apiKey)) {
            let jogs = time_jogadorRepo.getJogadoresTime(idTime);
            let jogadores = [];
            jogs.forEach(id => {
                jogadores.push(jogadoresRepo.getJogadorById(id));
            });
            let resposta = new Response(200, jogadores, "OK");
            return resposta;
        } else {
            return new Response(403, undefined, "Não Autorizado");
        }
    },

    addTime(time) {
        timesRepo.addTime(time);
    }
}

module.exports = timesController;