const timesRepo = require('../repositorios/timesRepo');
const jogadoresRepo = require('../repositorios/jogadoresRepo');

const contratosBR = {
    canCreate(contrato) {
        const jog = jogadoresRepo.getJogadorById(contrato.idJogador);
        const time = timesRepo.getTimeById(contrato.idTime);
        if (jog == undefined) {
            return `Jogador (ID: ${contrato.idJogador}) não encontrado.`
        } if (time == undefined) {
            return `Time (ID: ${contrato.idTime}) não encontrado.`
        }
    }
}

module.exports = contratosBR