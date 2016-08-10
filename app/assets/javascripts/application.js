require("babel-polyfill");
window.$ = require('jquery');
window.Auth = require("j-toker");
window.Auth.configure({
  apiUrl: "/api/v1"
});
require("./app.es6.jsx");
var marked = require("marked");
var highlight = require("highlight.js");

marked.setOptions({
  highlight: function(code) {
    return highlight.highlightAuto(code).value;
  },
  gfm: true,
  tables: true,
  sanitize: true
});
