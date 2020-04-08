const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://Stack:Stack@stackevents-qskeu.mongodb.net/StackEvents?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//usando json
app.use(express.json());
app.use(routes);

app.listen(3333);