const express = require('express');
const app = express();

app.listen(process.env.PORT || 3028, console.log(`foo server lisening on ${process.env.PORT || 3028}`));

app.get('/', (req, res) =>{
    res.send('<h1> Olá mundo! </h1>');
});