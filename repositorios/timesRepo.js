const Time = require("../models/Time")

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

const timesRepo = {
    getAllTimes: () => {
        return times;
    },
    
    getTimeById(id) {
        return times.find((elemento) => elemento.id == id);
    },

    addTime: (time) => {
        times.push(new Time(time));
    }
}

module.exports = timesRepo;