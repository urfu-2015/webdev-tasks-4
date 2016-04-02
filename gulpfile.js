var gulp = require('gulp');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var postcss = require('gulp-postcss');
var colorShort = require('postcss-color-short');
var discardComments = require('postcss-discard-comments');
var csscomb = require('gulp-csscomb');
var forCss = require('postcss-for');
var hidden = require('postcss-hidden');

gulp.task('one', function () {
    return gulp.src('./index.styl')
        .pipe(stylus())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(postcss([
            hidden, colorShort, discardComments, forCss
        ]))
        .pipe(csscomb())

        .pipe(gulp.dest('./'));
});

gulp.task('default', ['one']);
