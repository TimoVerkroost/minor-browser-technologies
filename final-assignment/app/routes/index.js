var express = require('express');
var router = express.Router();

var LocalStorage = require('node-localstorage').LocalStorage;
var shirtTextStorage = new LocalStorage('./storage/shirt-txt');


var pageOptions =
  {
    title: "Final assignment"
  };

router.get('/', function(req, res, next) {
  res.render('index', pageOptions);
});

router.post('/search', function(req, res) {
  var name = req.body.name;
  var dataSaved = JSON.parse(shirtTextStorage.getItem(name));

  res.locals.form = req.body;
  res.locals.dataSaved = dataSaved;
  if (dataSaved !== null) {
    res.render('results', pageOptions);
  } else {
    res.render('index', pageOptions);
  }
});

router.post('/saved', function(req, res) {
  var name = req.body.name;
  var shirtText1 = req.body.shirtText1;
  var shirtText2 = req.body.shirtText2;
  var shirtText3 = req.body.shirtText3;
  var myShirts = { shirt1: shirtText1, shirt2: shirtText2, shirt3: shirtText3 };

  shirtTextStorage.setItem(name, JSON.stringify(myShirts));

  var dataSaved = JSON.parse(shirtTextStorage.getItem(name));

  res.locals.form = req.body;
  res.locals.dataSaved = dataSaved;
  if (dataSaved !== null) {
    res.render('results', pageOptions);
  } else {
    res.render('index', pageOptions);
  }
});

router.post('/create', function(req, res) {
  res.locals.create = req.body;
  res.render('create', pageOptions);
});

module.exports = router;