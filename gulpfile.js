var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('one', function () {
    return gulp.src('./index.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['one']);
