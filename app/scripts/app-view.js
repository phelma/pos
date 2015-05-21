'use strict';

var Backbone = require('backbone');
var Retext = require('retext');
var visit = require('retext-visit');
var inspect = require('retext-inspect');
var pos = require('retext-pos');
var _ = require('underscore');

var AppView = Backbone.View.extend({
  el: '#app',

  initialize: function() {
    console.log('[App View] Initialize');
    this.textIn = document.getElementById('textIn');
    this.textOut = document.getElementById('textOut');

    this.retext = new Retext()
      .use(visit)
      .use(inspect)
      .use(pos);
    this.render();

    this.textIn.addEventListener('input', function(event) {
      this.render();
    }.bind(this));
  },

  debounceRender: function() {
    _.debounce(this.render, 200);
  },

  render: function() {
    var text = this.textIn.textContent.trim();
    var words = [];

    var that = this;
    this.retext.parse(text, function(err, tree) {
      tree.visit(tree.WORD_NODE, function(node) {

        var span = that.makeSpan(
          node.head.internalValue,
          node.data.partOfSpeech
        );
        words.push(span);
      });
    });

    this.textOut.innerHTML = '';

    words.forEach(function(el) {
      this.textOut.appendChild(el);
      this.textOut.appendChild(this.makeSpace());
    }.bind(this));
  },

  makeSpan: function(word, pos) {
    var span = document.createElement('span');
    span.textContent = word;
    span.classList.add('word', 'text', 'w-' + pos);
    return span;
  },

  makeSpace: function() {
    var space = document.createElement('span');
    space.textContent = ' ';
    space.classList.add('space', 'text');
    return space;
  },

  events: {

  }
});

module.exports = AppView;
