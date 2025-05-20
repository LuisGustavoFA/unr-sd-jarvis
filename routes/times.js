// var express = require('express');
import express from 'express';

var router = express.Router();
// const timesRepo = require('../repositorios/timesRepo');
// const timesController = require('../controllers/timesController')
import timesController from '../controllers/timesController.js';
import firestoreServices from '../services/firestore.js';

router.get('/', async function(req, res, next) {
  let response = await timesController.getAllTimes(req.get("api_key"));
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
  let response = firestoreServices.saveTime(req.body);
  // let response = timesController.addTime(req.get("api_key"), req.body);
  res.status(200).json(response);
});

export default router;
