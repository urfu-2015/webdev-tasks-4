var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('run_stylus', () => {
    gulp.src('./css/index.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('copy_html', () => {
    gulp.src('./index.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy_photos', () => {
    gulp.src('./photos/*')
        .pipe(gulp.dest('./dist/photos'));
});

gulp.task('default', ['run_stylus', 'copy_html', 'copy_photos']);
