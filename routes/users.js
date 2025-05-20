// var express = require('express');
import express from 'express';
import usersController from '../controllers/usersController.js';

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send("Send something here");
});

router.post('/', function(req, res, next) {
  usersController.criarLoginFirebase(req.body.email, req.body.password)
    .then(
      (resposta) => {
        res.status(201).send(resposta);
      }
    )
    .catch(
      (erro) => {
        res.status(500).send(erro);
      }
    )
});

router.post('/login', function(req, res, next) {
  usersController.fazerLoginFirebase(req.body.email, req.body.password)
    .then(
      (resposta) => {
        res.status(200).send(resposta);
      }
    )
    .catch(
      (erro) => {
        res.status(401).send(erro);
      }
    )
});

export default router;
