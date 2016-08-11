require("babel-polyfill");
window.$ = require('jquery');
window.Auth = require("j-toker");
window.Auth.configure({
  apiUrl: "/api/v1"
});
require("./app.es6.jsx");
var marked = require("marked");
var Renderer = marked.Renderer;
var highlight = require("highlight.js");

var renderer = new Renderer();
renderer.code = function(code, lang) {
  const validLang = !!(lang && highlight.getLanguage(lang));
  const highlighted = validLang ? highlight.highlight(lang, code) : code;
  return `<pre><code class="hljs ${lang}">${highlighted.value}</code></pre>`;
}

marked.setOptions({
  renderer: renderer,
  gfm: true,
  tables: true,
  sanitize: true
});
