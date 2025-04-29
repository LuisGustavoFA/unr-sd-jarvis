// const Jogador = require("../models/Jogador")
import Jogador from "../models/Jogador.js";

let jogadores = [];

jogadores.push(new Jogador({
  id: "1",
  nome: "Anthony",
  posicao: "Goleiro",
}));

jogadores.push(new Jogador({
    id: "2",
    nome: "Braithwaite",
    posicao: "Atacante",
}));

jogadores.push(new Jogador({
    id: "3",
    nome: "Allan Patrick",
    posicao: "Meio Campo",
}));

const jogadoresRepo = {
    getAllJogadores: () => {
        return jogadores;
    },
    
    getJogadorById(id) {
        return jogadores.find((jogador) => jogador.id == id);
    },

    addJogador: (jogador) => {
        jogadores.push(new Jogador(jogador));
    }
}

// module.exports = jogadoresRepo;
export default jogadoresRepo;