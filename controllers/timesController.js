const timesRepo = require('../repositorios/timesRepo');
const Response = require('../models/Response');

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

    addTime(time) {
        timesRepo.addTime(time);
    }
}

module.exports = timesController;