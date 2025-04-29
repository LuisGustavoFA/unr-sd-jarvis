// var express = require('express');
import express from 'express';
// const cors = require('cors');
import cors from 'cors';
// var path = require('path');
import path from 'path';

// workaround do __dirname
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// var cookieParser = require('cookie-parser');
import cookieParser from 'cookie-parser';
// var logger = require('morgan');
import logger from 'morgan';

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import rotaTimes from './routes/times.js';
import rotaJogadores from './routes/jogadores.js';
import { rotaContratos } from './routes/contratos.js';

var app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/times', rotaTimes);
app.use('/jogadores', rotaJogadores);
app.use('/contratos', rotaContratos);

// module.exports = app;
export default app;