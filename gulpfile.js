var gulp = require('gulp');
var csso = require('gulp-csso');
var csscomb = require('gulp-csscomb');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build-css', function() {
    return gulp.src('*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ require('autoprefixer') ]))
        .pipe(csscomb())
        .pipe(csso())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/'));
});
