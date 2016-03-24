var gulp = require('gulp');
var stylus = require('gulp-stylus');
var postcss = require('gulp-postcss');
var nano = require('gulp-cssnano');

gulp.task('one', function () {
    return gulp.src('index.styl')
        .pipe(stylus())
        .pipe( postcss([
            require('postcss-position'),
            require('postcss-size'),
            require('postcss-flexbox'),
            require('autoprefixer') ]) )
        .pipe(nano())
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['one']);
