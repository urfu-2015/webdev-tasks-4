var gulp = require('gulp');
var stylus = require('gulp-stylus');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var csswring = require('csswring');
var colormin = require('postcss-colormin');
var mergeRules = require('postcss-merge-rules');
var reduceTransforms = require('postcss-reduce-transforms');
var path = require('path');

var postcssPlugins = [
    autoprefixer(),
    csswring(),
    colormin(),
    mergeRules(),
    reduceTransforms()
];

gulp.task('default', function () {
  return gulp.src('./index.styl')
    .pipe(stylus())
    .pipe(postcss(postcssPlugins))
    .pipe(gulp.dest('./'));
});