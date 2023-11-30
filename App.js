const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const userCont = require('./public/UserController')
let hostname = 'localhost';
const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
let http = require('http');
let fs = require('fs');

app.get('/golfrankings', userCont.getAll);
app.post('/golfer', userCont.golfer);
app.post('/updategolfer', userCont.updateGolfer);
app.get('/delgolfer/:rank', userCont.deleteGolfer);

let handleRequest = (req, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.write("golfrankings.html")
    response.end();
};

// Server will use the folder 'public'
app.use(express.static('public'));
exports.app = app;