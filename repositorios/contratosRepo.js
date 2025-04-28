const contratos = new Map();
let id = 0;

const contratosRepo = {
    getContratosTime: (idTime) => {
      return contratos.get(idTime);
    },

    getAllContratos: () => {
      const temp = new Array();
      contratos.forEach((value, key)=> {
        value.forEach((contrato)=> {
          temp.push(contrato);
        })
      })
      return temp;
    },
    
    addContrato: (contrato) => {
      let temp = contratos.get(contrato.idTime);
      if (temp == undefined) {
        temp = new Array();
      }
      if (contrato.id == 0) {
        contrato.id = id++;
      }
      temp.push(contrato)
      contratos.set(contrato.idTime, temp);
    }
}

module.exports = contratosRepo;