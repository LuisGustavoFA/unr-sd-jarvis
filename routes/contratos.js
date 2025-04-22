var express = require('express');
var router = express.Router();
const contratosController = require('../controllers/contratosController')

router.get('/', function(req, res, next) {
  let response = contratosController.getAllContratos(req.get("api_key"));
  res.status(response.code).json(response.payload);
});

// router.get('/:id/jogadores', function(req, res, next) {
//   let response = timesController.getJogadoresTime(req.get("api_key"), req.params.id);
//   res.status(response.code).json(response.payload);
// });

// router.get('/:id', function(req, res, next) {
//   let response = timesController.getTimeById(req.get("api_key"), req.params.id);
//   res.status(response.code).json(response.payload);
// });

router.post('/', function(req, res, next) {
  let response = contratosController.addContrato(req.get("api_key"), req.body);
  res.status(response.code).json(response.message);
});

module.exports = router;