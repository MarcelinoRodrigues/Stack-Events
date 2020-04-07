const express = require('express');
const EventoController = require('./controller/EventoController');

const routes = express.Router();

routes.post('/Eventos',EventoController.store);

module.exports = routes;