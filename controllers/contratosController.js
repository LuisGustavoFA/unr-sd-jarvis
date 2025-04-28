const timesRepo = require('../repositorios/timesRepo');
const jogadoresRepo = require('../repositorios/jogadoresRepo');
const services = require('../services');
const contratosBR = require('../businessRules/contratosBR');
const contratosRepo = require('../repositorios/contratosRepo');
// const Contrato = require('../models/Contrato');

const contratosController = {
    getAllContratos() {
        return services.createOkResponse(contratosRepo.getAllContratos());
    },

    addContrato(apiKey, contrato) {
        if (!services.ApiKeyTest(apiKey)) {
            return services.createUnAuthResponse();
        }

        // const respBR = contratosBR.canCreate(contrato);
        // if (respBR != "OK") {
        //     return services.createUnProcessableResponse(respBR);
        // }

        // let contrato = Contrato.build(json);

        try{
            contratosBR.canCreate(contrato);
            contratosRepo.addContrato(contrato);
            return services.createCreatedResponse();
        } catch (error) {
            return services.createUnProcessableResponse(error.message);
        }
    }
}

module.exports = contratosController;