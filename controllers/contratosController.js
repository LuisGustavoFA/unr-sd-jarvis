// const services = require('../services');
// import services from '../services';
import { ApiKeyTest, createOkResponse, createUnAuthResponse, createCreatedResponse, createUnProcessableResponse } from '../services/index.js';
// const contratosBR = require('../businessRules/contratosBR');
import contratosBR from '../businessRules/contratosBR.js';
// const contratosRepo = require('../repositorios/contratosRepo');
import contratosRepo from '../repositorios/contratosRepo.js';
// const Contrato = require('../models/Contrato');

const contratosController = {
    getAllContratos() {
        return createOkResponse(contratosRepo.getAllContratos());
    },

    addContrato(apiKey, contrato) {
        if (!ApiKeyTest(apiKey)) {
            return createUnAuthResponse();
        }

        // const respBR = contratosBR.canCreate(contrato);
        // if (respBR != "OK") {
        //     return createUnProcessableResponse(respBR);
        // }

        // let contrato = Contrato.build(json);

        try{
            contratosBR.canCreate(contrato);
            contratosRepo.addContrato(contrato);
            return createCreatedResponse();
        } catch (error) {
            return createUnProcessableResponse(error.message);
        }
    }
}

// module.exports = contratosController;
export default contratosController;