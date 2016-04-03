var gulp = require('gulp');
var stylus = require('gulp-stylus');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var csswring = require('csswring');
var colormin = require('postcss-colormin');
var mergeRules = require('postcss-merge-rules');
var reduceTransforms = require('postcss-reduce-transforms');
var path = require('path');
var resolveDependents = require('gulp-resolve-dependents');

var postcssPlugins = [
    autoprefixer(),
    csswring(),
    colormin(),
    mergeRules(),
    reduceTransforms()
];

function stylusResolver(filePath, fileContents) {
    var match, result = [],
        pattern = /@import "(.+?)"/mg;
    while ((match = pattern.exec(fileContents)) !== null) {
        result.push(path.resolve(path.dirname(filePath), match[1]));
    }
    console.log(result);
    return result;
}

gulp.task('default', function () {
  return gulp.src('./index.styl')
    .pipe(resolveDependents({
        files: './blocks/**/*.styl',
        resolver: stylusResolver,
        basePath: './blocks/**/'
    }))
    .pipe(stylus())
    .pipe(postcss(postcssPlugins))
    .pipe(gulp.dest('./'));
});