var express = require('express');
var router = express.Router();
const jogadoresController = require('../controllers/jogadoresController')

router.get('/', function(req, res, next) {
  let response = jogadoresController.getAllJogadores(req.get("api_key"));
  res.status(response.code).json(response.payload);

});

router.get('/:id', function(req, res, next) {
  res.json(jogadoresController.getJogadorById(req.params.id));
});

router.post('/', function(req, res, next) {
  jogadoresController.addJogador(req.body);
  res.send("ok");
});

module.exports = router;
