require("babel-polyfill");
window.$ = require('jquery');
window.Auth = require("j-toker");
window.Auth.configure({
  apiUrl: "/api/v1"
});
require("./app.es6.jsx");
