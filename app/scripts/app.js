/**
 * scripts/app.js
 *
 * This is a sample CommonJS module.
 * Take a look at http://browserify.org/ for more info
 */

'use strict';

var Retext = require('retext');
var visit = require('retext-visit');
var inspect = require('retext-inspect');
var pos = require('retext-pos');

function App() {
  console.log('app initialized');
}

module.exports = App;

App.prototype.init = function() {

  var retext = new Retext()
    .use(visit)
    .use(inspect)
    .use(pos);

  retext.parse(
    'Well that is a load of shit',
    function(err, tree) {
      tree.visit(tree.WORD_NODE, function(node) {
        console.log(node.data.partOfSpeech, node.head.internalValue);
      });
    }
  );
};
