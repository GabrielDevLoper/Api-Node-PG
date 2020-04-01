const express = require('express');
const cors = require('cors');
const route = require('./routes');
const app =  express();

require('./database');

app.use(express.json());
app.use(cors());
app.use(route);



app.listen(3222);