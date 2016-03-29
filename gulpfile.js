'use strict';

const gulp = require('gulp');
const stylus = require('gulp-stylus');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const opacity = require('postcss-opacity');
const willChange = require('postcss-will-change');
const imagemin = require('gulp-imagemin');

gulp.task('css', function () {
    var processors = [
        willChange,
        autoprefixer,
        opacity
    ];
    return gulp
        .src('./index.styl')
        .pipe(stylus())
        .pipe(postcss(processors))
        .pipe(gulp.dest('./'));
});

gulp.task('compress', function() {
    gulp
        .src('images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['compress', 'css']);