//index,show,store,update,destroy
const Evento = require('../models/Evento');

module.exports = {
    async store(req,res){
        //aplicando dessestruturação do js
        const {nome} = req.body;

        let evento = await Evento.findOne({nome})
        //const evento = await Evento.create({nome})
        if(!evento){
            evento = await Evento.create({nome});
        }

        return res.json(evento);
    }
};