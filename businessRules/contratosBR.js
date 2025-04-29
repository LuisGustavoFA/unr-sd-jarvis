// const timesRepo = require('../repositorios/timesRepo');
// const jogadoresRepo = require('../repositorios/jogadoresRepo');
// const contratosRepo = require('../repositorios/contratosRepo');
import timesRepo from '../repositorios/timesRepo.js';
import jogadoresRepo from '../repositorios/jogadoresRepo.js';
import contratosRepo from '../repositorios/contratosRepo.js';

const contratosBR = {
    isAContract(contrato) {
        if (contrato == undefined) {
            const erro = new Error("Contrato inválido", "contratoBR.js", 7);
            throw erro;
        }
        if (contrato.tipo == undefined) {
            const erro = new Error("Tipo inválido", "contratoBR.js", 11);
            throw erro;
        }
        if (contrato.inicio == undefined) {
            const erro = new Error("Data de inicio inválida", "contratoBR.js", 15);
            throw erro;
        }
        if (contrato.idJogador == undefined) {
            const erro = new Error("Jogador não indicado", "contratoBR.js", 19);
            throw erro;
        }
        if (contrato.idTime == undefined) {
            const erro = new Error("Time não indicado", "contratoBR.js", 23);
            throw erro;
        }
        if (contrato.id == undefined) {
            contrato.id = 0;
        }
    },

    jogadorHasContract(idJogador) {
        const contratos = contratosRepo.getAllContratos();
        let ret = false;
        contratos.forEach((contrato) => {
            if (contrato.idJogador == idJogador && (contrato.fim == "" || contrato.fim == undefined)) {
                ret = true;
            }
        });
        return ret;
    },

    canCreate(contrato) {
        this.isAContract(contrato);

        const jog = jogadoresRepo.getJogadorById(contrato.idJogador);
        const time = timesRepo.getTimeById(contrato.idTime);
        if (jog == undefined) {
            const erro = new Error(`Jogador (ID: ${contrato.idJogador}) não encontrado.`, "contratosBR.js", 8);
            throw erro;
        } 
        if (time == undefined) {
            const erro = new Error(`Time (ID: ${contrato.idTime}) não encontrado.`);
            throw erro;
        }

        if(contrato.fim == undefined || contrato.fim == "") {
            if (this.jogadorHasContract(contrato.idJogador)) {
                const erro = new Error(`Jogador (ID: ${contrato.idJogador}) já tem contrato ativo.`);
                throw erro;
            }
        }

    }
}

// module.exports = contratosBR
export default contratosBR;