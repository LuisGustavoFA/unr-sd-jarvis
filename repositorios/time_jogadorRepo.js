let Time = require('../models/Time');

const contratos = new Map();

contratos.set("1", ["1", "3"]);
contratos.set("2", ["2"]);

let times = [];

times.push(new Time({
  id: "1",
  nome: "Sport Club International",
  federacao: "FGF",
  categorias: [
    "sub-13", "sub-15", "sub-17", "sub-20", "profissional",
    "sub-13 (fem)", "sub-15 (fem)", "sub-17 (fem)", "sub-20 (fem)", "profissional (fem)"
  ]
}));

times.push(new Time({
  id: "2",
  nome: "São José (Zequinha)",
  federacao: "FGF",
  categorias: [
    "sub-13", "sub-15", "sub-17", "sub-20", "profissional"
  ]
}));

const time_jogadorRepo = {
    getJogadoresTime: (idTime) => {
        return contratos.get(idTime);
    },
    
    getJogadorTime(idTime, idJogador) {
      return contratos.get(idTime).idJogador;
    },

    addJogadorTime: (idTime, idJogador) => {
      let temp = contratos.get(idTime);
      temp.push(idJogador);
      contratos.set(idTime, temp)
    }
}

module.exports = time_jogadorRepo;