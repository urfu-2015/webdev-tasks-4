var gulp = require('gulp');
var handlebars = require('gulp-static-handlebars');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var size = require('postcss-size');
var autoreset = require('postcss-autoreset');
var mergeRules = require('postcss-merge-rules');
var postcss = require('gulp-postcss');
var nano = require('gulp-cssnano');
var rename = require('gulp-rename');
var fs = require('fs');

var data = fs.readFileSync(__dirname + '/data.json');

gulp.task('build-html', function () {
    gulp.src('./blocks/common/common.hbs')
        .pipe(handlebars(JSON.parse(data), {
            partials: gulp.src('./blocks/**/*.hbs')
        }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build-style', function () {
    gulp.src('./blocks/**/*.styl')
        .pipe(stylus())
        .pipe(concat('index.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(postcss([size, mergeRules, autoreset]))
        .pipe(nano())
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['build-html', 'build-style']);
