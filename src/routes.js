const express = require('express');
const route = express.Router();

const UserController = require('./controller/UserController');

route.post('/users', UserController.store);
route.get('/users', UserController.index);
route.delete('/users/:id', UserController.destroy);



module.exports = route;
