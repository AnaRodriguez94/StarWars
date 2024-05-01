const express = require('express');
const controller = express.Router();

const characterModel = require('../models/Character');
const bodyParser = require('body-parser');


controller.get('/', function(req, res, next) {

  charModel.find(function(error, characters) {
    if (error) return error;
    res.json(characters);
  });

});

controller.get('/:id', function(req, res, next) {
  characterModel.findById(req.params.id, function(error, character) {
    if (error) return error;
    res.json(character);
  });
});

controller.post('/', function(req, res, next) {
  characterModel.create(req.body, function(error, character) {
    if (error) return error;
    res.json(character);
  });
});

controller.put('/:id', function(req, res, next) {
  characterModel.findByIdAndUpdate(req.params.id, req.body, function(error, character) {
    if (error) return error;
    res.json(character);
  })
});
controller.patch('/:id', function(req, res, next) {
  characterModel.findByIdAndUpdate(req.params.id, req.body, function(error, character) {
    if (error) return error;
    res.json(character);
  })
});

controller.delete('/:id', function(req, res, next) {
  characterModel.findByIdAndRemove(req.params.id, req.body, function(error, character) {
    if (error) return error;
    res.json({
      "Message": "User with the id of " + character.id + " has been removed"
    });
  });
});


module.exports = controller;
