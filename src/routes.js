const express = require('express');
const route = express.Router();

const UserController = require('./controller/UserController');
const AddressController = require('./controller/AddressController');

//Rotas para usuarios
route.post('/users', UserController.store);
route.get('/users', UserController.index);
route.delete('/users/:id', UserController.destroy);

//Rotas para endereços
route.post('/users/:user_id/address', AddressController.store);
route.get('/users/:user_id/address', AddressController.index);





module.exports = route;
