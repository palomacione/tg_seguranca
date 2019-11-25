const express = require('express');
const app = express();

app.listen('3028', console.log('foo server lisening on 3028'));

app.get('/', (req, res) =>{
    res.send('<h1> Olá mundo! </h1>');
});