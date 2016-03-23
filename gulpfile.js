var gulp = require('gulp');
var stylus = require('gulp-stylus');


gulp.task('stylus', function () {

    var stylus = require('gulp-stylus');
    return gulp.src('./style/*.styl')
        .pipe(stylus())

        .pipe(gulp.dest('./style'));
});


gulp.task('autoprefixer', function () {
    var postcss      = require('gulp-postcss');
    var sourcemaps   = require('gulp-sourcemaps');
    var autoprefixer = require('autoprefixer');
    var nano = require('gulp-cssnano');

    return gulp.src('./style/*.css')
        .pipe(sourcemaps.init())
        .pipe(nano())
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./style'));
});