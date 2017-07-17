var express = require('express');
var app = express();
var cors = require('cors');
var fs = require('fs');

app.use(cors());

const listWord = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  const index = Math.floor((Math.random() * listWord.length) + 1);
  res.send(JSON.stringify(listWord[index - 1]));
})

app.listen(3000);