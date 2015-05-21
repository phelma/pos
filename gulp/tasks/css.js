'use strict';

var config = require('../config');
var gulp = require('gulp');
// var prefix = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var fingerprint = require('gulp-fingerprint');
var less = require('gulp-less');
var size = require('gulp-size');

// Styles
gulp.task('styles', function () {
  return gulp.src('app/styles/**/*.css')
    .pipe(gulp.dest(config.dist + '/styles'))
    .pipe(size());
});


// Styles Dist
gulp.task('styles:dist', function () {
  return gulp.src('app/styles/**/*.css')
    .pipe(csso())  // minify css
    .pipe(gulp.dest(config.dist + '/styles'))
    .pipe(size());
});
