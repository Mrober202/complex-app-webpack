var express = require("express");
var router = new express.Router();

router.use("/films", require("./film_ui"));

router.get("/", function(req, res) {
  res.json({data: "film review site"});
});

router.get("/about", function(req, res) {
  res.json({data: "reviews n that"});
});

module.exports = router;
