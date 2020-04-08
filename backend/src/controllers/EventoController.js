//index,show,store,update,destroy
const Evento = require('../models/Evento');

module.exports = {
    async store(req,res){
        //aplicando dessestruturação do js
        const {nome, data, description} = req.body;
        const {filename} = req.file;

        const evento = await Evento.create({
            nome: nome,
            data: data,
            description: description,
            thumbnail: filename
        })

        return res.json(evento);
    }
};