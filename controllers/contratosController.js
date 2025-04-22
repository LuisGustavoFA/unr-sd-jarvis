const timesRepo = require('../repositorios/timesRepo');
const time_jogadorRepo = require("../repositorios/time_jogadorRepo");
const jogadoresRepo = require('../repositorios/jogadoresRepo');
const services = require('../services');
const contratosBR = require('../businessRules/contratosBR')

const contratosController = {
    addContrato(apiKey, contrato) {
        if (!services.ApiKeyTest(apiKey)) {
            return services.createUnAuthResponse();
        }
        const respBR = contratosBR.canCreate(contrato);
        if (respBR != "OK") {
            return services.createUnProcessableResponse(respBR);
        }
    }
}

module.exports = contratosController;