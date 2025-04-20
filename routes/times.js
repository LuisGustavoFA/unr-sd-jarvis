var express = require('express');
var router = express.Router();
// const timesRepo = require('../repositorios/timesRepo');
const timesController = require('../controllers/timesController')

router.get('/', function(req, res, next) {
  let response = timesController.getAllTimes(req.get("api_key"));
  res.status(response.code).json(response.payload);
});

router.get('/:id/jogadores', function(req, res, next) {
  let response = timesController.getJogadoresTime(req.get("api_key"), req.params.id);
  res.status(response.code).json(response.payload);
});

router.get('/:id', function(req, res, next) {
  let response = timesController.getTimeById(req.get("api_key"), req.params.id);
  res.status(response.code).json(response.payload);
});

router.post('/', function(req, res, next) {
  let response = timesController.addTime(req.get("api_key"), req.body);
  res.status(response.code).json(response.payload);
});

module.exports = router;
