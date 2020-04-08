const mongoose = require('mongoose');

const eventoSchema = new mongoose.Schema({
    nome: String,
    data: Date,
    description: String,
    thumbnail: String,
})

module.exports = mongoose.model('Evento', eventoSchema);