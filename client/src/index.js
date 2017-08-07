var UI = require("./views/ui.js")// dependencies: ui.js

var app = function(){
  new UI();
}

window.addEventListener('load', app);
