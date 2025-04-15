let jogadores = [];

jogadores.push({
  id: "1",
  nome: "Anthony",
  posicao: "Goleiro",
});

jogadores.push({
    id: "2",
    nome: "Braithwaite",
    posicao: "Atacante",
});

jogadores.push({
    id: "3",
    nome: "Allan Patrick",
    posicao: "Meio Campo",
});

const jogadoresRepo = {
    getAllJogadores: () => {
        return jogadores;
    },
    
    getJogadorById(id) {
        return jogadores.find((elemento) => elemento.id == id);
    },

    addJogador: (jogador) => {
        jogadores.push(jogador);
    }
}

module.exports = jogadoresRepo;