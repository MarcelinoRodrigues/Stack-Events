const mongoose = require('mongoose');

const eventoSchema = new mongoose.Schema({
    nome: String,
    data: Date,
    descricao: String,
    arquivo: String,
    Active: Boolean,
})

module.exports = mongoose.model('Evento', eventoSchema);