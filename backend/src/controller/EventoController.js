//index,show,store,update,destroy
const Evento = require('../models/Evento');

module.exports= {
    async store(req,res){
        //desestruturação js
        //propriedades do meu evento
        const {nome} = req.body;

        //criando meu evento
        const evento = await Evento.create({nome});

        return res.json(evento);
    }
};