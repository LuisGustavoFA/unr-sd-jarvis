// var express = require('express');
import express from 'express';

var router = express.Router();
// const jogadoresController = require('../controllers/jogadoresController')
import jogadoresController from '../controllers/jogadoresController.js';

router.get('/', function(req, res, next) {
  let response = jogadoresController.getAllJogadores(req.get("api_key"));
  res.status(response.code).json(response.payload);

});

router.get('/:id', function(req, res, next) {
  let response = jogadoresController.getJogadorById(req.get("api_key"), req.params.id)
  res.status(response.code).json(response.payload);
});

router.post('/', function(req, res, next) {
  let response = jogadoresController.addJogador(req.get("api_key"), req.body);
  res.status(response.code).json(response.payload);
});

export default router;
