var path = require("path");
const express = require("express");
const data = require("../data/friends");


var app = express()
app.use(express.static(__dirname + './app/public'));




module.exports = function(app) {
  app.get("/api/friends", (req, res) => res.json(data))

  app.post("/api/friends", (req, res) => {
    let newCharacter = {
      name: req.body.name,
      photo: req.body.photo,
      scores: req.body.scores
    };

    if (!newCharacter.name) {
      return res.status(400).json({ msg: "please include a name" });
    }
    data.push(newCharacter);
    return res.json(data);
  });
};
