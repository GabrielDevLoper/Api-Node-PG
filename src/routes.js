const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    return res.send("olá teste");
});

module.exports = route;
