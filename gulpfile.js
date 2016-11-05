'use strict';

let gulp = require('gulp'),
    del = require('del'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps');

let sourceDir = './src';
let buildDir = './dist';

gulp.task('clean', function () {
    del('dist');
});

gulp.task('build:scripts', function () {
    gulp.src(`${sourceDir}/*.js`)
        .pipe(rename('view-with-transition.js'))
        .pipe(gulp.dest(buildDir));
});

gulp.task('build:styles', function () {
    gulp.src(`${sourceDir}/*.scss`)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(rename('view-with-transition.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(buildDir));
});

gulp.task('default', ['clean', 'build:scripts', 'build:styles']);