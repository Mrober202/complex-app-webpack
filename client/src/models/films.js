// dependencies; film.js and review.js
var Film = require("./film.js");
var Review = require("./review.js");

var Films = function(){

  var review1 = new Review({
    comment: "It's not even a thing. What just happened. I want my life back.",
    rating: 1,
    author: "Val"
  });

  var review2 = new Review({
    comment: "Pew pew pew lightsabers space cowboys whoot what's not to love",
    rating: 100,
    author: "Val"
  });

  var review3 = new Review({
    comment:"Produced by aliens",
    rating: 100,
    author: "Kieran"
  });

  var review4 = new Review({
    comment: "A Visual and literary Symphony",
    rating: 1000000,
    author: "Mick"
  })

  var film1 = new Film({
    title: "Now You See Me",
    actors: ["Woody Harrelson", "Jesse Eisenberg"]
  });

  var film2 = new Film({
    title: "Star Wars Episode IV: A New Hope",
    actors: ["Harrison Ford", "Alec Guiness"]
  });

  var film3 = new Film({
    title: "The Room",
    actors: ["Tommy Wiseau", "Greg Sestero"]
  });

var filmsArray =[];



  film1.addReview(review1);
  film2.addReview(review2);
  film2.addReview(review4);
  film3.addReview(review3);
  addFilm(filmsArray, film1);
  addFilm(filmsArray, film2);
  addFilm(filmsArray, film3);

  return filmsArray;
}

var addFilm = function(array, film) {
  array.push(film);
};

module.exports = Films;
