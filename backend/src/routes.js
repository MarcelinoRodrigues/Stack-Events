const express = require('express');
const multer = require('multer')
const uploadConfig = require('./config/upload');
const EventoController = require('./controllers/EventoController');

const routes = express.Router();
const upload = multer(uploadConfig);

//Minhas rotas
routes.post('/Eventos', upload.single('thumbnail'),EventoController.store);

module.exports = routes;