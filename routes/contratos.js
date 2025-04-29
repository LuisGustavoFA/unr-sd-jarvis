// var express = require('express');
import express from 'express';

export const rotaContratos = express.Router();

// const contratosController = require('../controllers/contratosController')
import contratosController from '../controllers/contratosController.js';

rotaContratos.get('/', function(req, res, next) {
  let response = contratosController.getAllContratos(req.get("api_key"));
  res.status(response.code).json(response.payload);
});

// rotaContratos.get('/:id/jogadores', function(req, res, next) {
//   let response = timesController.getJogadoresTime(req.get("api_key"), req.params.id);
//   res.status(response.code).json(response.payload);
// });

// rotaContratos.get('/:id', function(req, res, next) {
//   let response = timesController.getTimeById(req.get("api_key"), req.params.id);
//   res.status(response.code).json(response.payload);
// });

rotaContratos.post('/', function(req, res, next) {
  let response = contratosController.addContrato(req.get("api_key"), req.body);
  res.status(response.code).json(response.message);
});