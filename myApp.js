const { response } = require('express');
var express = require('express');
// var bodyParser = require('body-parser');                    // deprecated

var app = express();

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extend: false }));          // deprecated
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

// middleware
app.get('/', function (req, res) {
    res.send('hello world')
  })

// api date that returns a JSON object with a unix key and utc key
app.get("/api/:date?", function (req,res) {
    res.json({greeting: 'hello api date'});   
})

// api unix that returns a JSON object with a unix key and utc key
app.get("/api/:number?", function (req,res) {
    res.json({greeting: 'hello api number'});   
})

app.get("/yeet", function (req, res) {
    res.json({greeting: 'yeet'});
})





module.exports = app;
  