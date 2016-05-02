'use strict';

const gulp = require('gulp');
const bem = require('@bem/gulp');
const concat = require('gulp-concat');
const merge = require('gulp-merge');
const stylus = require('gulp-stylus');
const postcss = require('gulp-postcss');
const csso = require('gulp-csso');
const csscomb = require('gulp-csscomb');
const glob = require('glob');
const thru = require('through2');
const bemhtml = require('gulp-bem-xjst').bemhtml;
const bemtree = require('gulp-bem-xjst').bemtree;

const isProd = process.env.YENV === 'production';

function skip() {
    return thru.obj();
}

let project = bem({
    bemconfig: {
        'blocks': { scheme: 'nested' }
    }
});

let bundle = project.bundle({
    path: 'bundles/index',
    decl: 'index.bemdecl.js'
});

gulp.task('bem', () => {
    return merge(
        // bemhtml
        bundle.src({
            tech: 'bemhtml.js',
            extensions: ['.bemhtml.js', '.bemhtml']
        })
        .pipe(concat(bundle.name()))
        .pipe(bemhtml({ extension: '.bemhtml.js' })),

        // bemtree
        bundle.src({
            tech: 'bemtree.js',
            extensions: ['.bemtree.js']
        })
        .pipe(concat(bundle.name()))
        .pipe(bemtree({ extension: '.bemtree.js' }))
    )
    .pipe(gulp.dest('build/bundles/index'));
});

gulp.task('css', () => {
    bundle.src({
        tech: 'css',
        extensions: ['.css', '.styl']
    })
    .pipe(concat(`${bundle.name()}.styl`))
    .pipe(stylus())
    .pipe(csscomb())
    .pipe(postcss([
        require('postcss-import'),
        require('postcss-opacity'),
        require('postcss-color-rgba-fallback'),
        require('postcss-font-magician'),
        require('autoprefixer')
    ]))
    .pipe(isProd ? csso() : skip())
    .pipe(concat(`${bundle.name()}.min.css`))
    .pipe(gulp.dest('static'));
});

gulp.task('img', () => {
    project.levels.map(level => glob(`${level}/**/*.{jpg,png,gif,svg}`, (err, files) => {
        gulp.src(files).pipe(gulp.dest('static/img'));
    }));
});

gulp.task('build', ['bem', 'css', 'img']);
gulp.task('default', ['build']);
