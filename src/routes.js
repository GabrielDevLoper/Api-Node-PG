const express = require('express');
const route = express.Router();

const UserController = require('./controller/UserController');
const AddressController = require('./controller/AddressController');
const TechController = require('./controller/TechController');
const ReportController = require('./controller/ReportController');



//Rotas para usuarios
route.post('/users', UserController.store);
route.get('/users', UserController.index);
route.delete('/users/:id', UserController.destroy);

//Rotas para endereços
route.post('/users/:user_id/address', AddressController.store);
route.get('/users/:user_id/address', AddressController.index);

//Rotas para tecnologias
route.post('/users/:user_id/techs', TechController.store);
route.get('/users/:user_id/techs', TechController.index);
route.delete('/users/:user_id/techs', TechController.delete);

//Rotas para os report
route.get('/report', ReportController.show);





module.exports = route;
