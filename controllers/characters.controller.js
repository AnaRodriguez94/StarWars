const express = require('express');
const controller = express.Router();

const characterModel = require('../models/Character');
const bodyParser = require('body-parser');


controller.get('/:id', function(req, res) {
  characterModel.findById(req.params.id, function(error, character) {
    if (error) {
      console.log(error);
      return res.status(500).json(error);
    }
    res.json(character);
  });
});

controller.post('/', function(req, res) {
  characterModel.create(req.body, function(error, character) {
    if (error) {
      console.log(error);
      return res.status(500).json(error);
    }
    res.json(character);
  });
});

controller.put('/:id', function(req, res) {
  characterModel.findByIdAndUpdate(req.params.id, req.body, function(error, character) {
    if (error) {
      console.log(error);
      return res.status(500).json(error);
    }
    res.json(character);
  })
});

controller.patch('/:id', function(req, res) {
  characterModel.findByIdAndUpdate(req.params.id, req.body, function(error, character) {
    if (error) {
      console.log(error);
      return res.status(500).json(error);
    }
    res.json(character);
  })
});

controller.delete('/:id', function(req, res) {
  characterModel.findByIdAndRemove(req.params.id, req.body, function(error, character) {
    if (error) {
      console.log(error);
      return res.status(500).json(error);
    }
    res.json({
      "Message": "User with the id of " + character.id + " has been removed"
    });
  });
});