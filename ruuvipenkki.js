
const express = require('express'),
  ruuvipenkki = express();
const http = require('http');
const path = require('path');
const parser = require('body-parser');

const toolbox = require('./tools/toolbox');

ruuvipenkki.use(parser.json());
ruuvipenkki.use(parser.urlencoded({extended=false}));

ruuvipenkki.route('/')
  .get((req, res) => {
    res.json({"ruuvipenkki": "whoo!"});
  });
  /*
  .get((req, res) => {
    ruuvipenkki.use(express.static('build'));}
    res.sendFile(path.join(__dirname, '/build/index.html'));
  });
  */

ruuvipenkki.listen(port = 4004, () => {
  console.log(`Ruuvipenkki is now running.`)
});