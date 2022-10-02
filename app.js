const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();

const JWT_SCRET = 'Test Use Model JsonWEbToken';

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origni', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization');
    next();
})

app.get('/', (req, res) => {
    res.json({
        name: 'Ezz Aldin',
        age: 21
    });
});


app.listen(3000, () => console.log('Server listhen in Port 3000'));