const mongoose = require('mongoose');

const EventoSchema = new mongoose.Schema({
    nome: String,
    data: Date,
    descricao: String,
    arquivo: String
})