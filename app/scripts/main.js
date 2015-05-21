/**
 * scripts/main.js
 *
 * This is the starting point for your application.
 * Take a look at http://browserify.org/ for more info
 */

'use strict';

var AppView = require('./app-view');
var Backbone = require('backbone');

var app = {};
app.appView = new AppView();
