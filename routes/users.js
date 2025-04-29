// var express = require('express');
import express from 'express';

var router = express.Router();

let users = [
  {
    id: 1,
    nome: "Fulano",
    idade: 19,
    endereco: "rual tal 123"
  },
  {
    id: 2,
    nome: "Dilano",
    idade: 22,
    endereco: "rual mal 231"
  },
  {
    id: 3,
    nome: "Trilano",
    idade: 24,
    endereco: "rual cal 321"
  }
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

export default router;
