const express = require('express');
const routes = express.Router();

const RotaController = require('./controllers/RotaController');

routes.get('/products', RotaController.index);
routes.get('/products/:id', RotaController.show);
routes.post('/products', RotaController.store);
routes.put('/products/:id', RotaController.update);
routes.delete('/products/:id', RotaController.destroy);

module.exports = routes;