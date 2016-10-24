'use strict';

let gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps');

let sourceDir = './src';
let buildDir = './dist';

gulp.task('build-js', function () {
    gulp.src(`${sourceDir}/*.js`)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename('view-with-transition.min.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(buildDir));
});

gulp.task('build-css', function () {
    gulp.src(`${sourceDir}/*.scss`)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(rename('view-with-transition.min.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(buildDir));
});

gulp.task('default', ['build-js', 'build-css']);