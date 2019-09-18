const mongoose = require('mongoose');

const Rota = mongoose.model('Rota');

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query;
        const Rotas = await Rota.paginate({}, { page, limit: 10 });
        return res.json(Rotas);
    },
    async show(req, res){
        const Rota = await Rota.findById(req.params.id);
        return res.json(Rota);
    },
    async store(req, res){
        const Rota = await Rota.create(req.body);
        return res.json(Rota);
    },
    async update(req, res){
        const Rota = await Rota.findByIdAndUpdate(req.params.id, req.body, {new : true});
        return res.json(Rota);
    },
    async destroy(req, res){
        const Rota = await Rota.findByIdAndRemove(req.params.id);
        return res.send();
    }
}