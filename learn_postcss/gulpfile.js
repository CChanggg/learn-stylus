var gulp = require('gulp');
var postcss = require('gulp-postcss');
// var autoprefixer = require('autoprefixer'); //自动加前缀 
var cssnext = require('postcss-cssnext');
var precss = require('precss');
var rename = require('gulp-rename');
var cssnano = require('cssnano');

gulp.task('styles', function() {
    return gulp.src('css/*.css')
        .pipe(postcss([cssnext(), precss()]))
        .pipe(gulp.dest('dest/'))
});
gulp.task('rename', ['styles'], function() {
    return gulp.src('dest/example.css')
        .pipe(postcss([cssnano]))
        .pipe(rename('example.min.css'))
        .pipe(gulp.dest('dest/'))
})
gulp.task('default', ['styles', 'rename']);