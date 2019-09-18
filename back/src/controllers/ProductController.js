const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query;
        const Products = await Product.paginate({}, { page, limit: 10 });
        return res.json(Products);
    },
    async show(req, res){
        const Product = await Product.findById(req.params.id);
        return res.json(Product);
    },
    async store(req, res){
        const Product = await Product.create(req.body);
        return res.json(Product);
    },
    async update(req, res){
        const Product = await Product.findByIdAndUpdate(req.params.id, req.body, {new : true});
        return res.json(Product);
    },
    async destroy(req, res){
        const Product = await Product.findByIdAndRemove(req.params.id);
        return res.send();
    }
}