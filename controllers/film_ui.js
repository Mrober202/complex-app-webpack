var Films = require("../client/src/models/films.js");
// var film = require("../client/src/models/film.js");
// var review = require("../client/src/models/review.js");
var express = require("express");
var filmRouter = new express.Router();
var filmsArray = new Films();

filmRouter.get("/", function(req, res) {
  res.json(filmsArray);
});

filmRouter.get("/:id", function(req, res) {
  var index = req.params.id;
  res.json({data: filmsArray[index]});
});

filmRouter.post("/", function(req, res) {
  filmsArray.push(req.body.film);
  res.json({data: filmsArray});
});

filmRouter.put("/:id", function(req, res) {
  filmsArray[req.params.id] = req.body.film;
  res.json(filmsArray);
});

filmRouter.delete("/:id", function(req, res) {
  filmsArray.splice(req.params.id, 1);
  res.json({data: filmsArray});
});

module.exports = filmRouter;
