'use strict'

var gulp       = require('gulp'),
	sass         = require('gulp-sass'),
	concatCss    = require('gulp-concat-css'),
	cleanCSS     = require('gulp-clean-css'),
	livereload   = require('gulp-livereload'),
	connect      = require('gulp-connect'),
	uncss        = require('gulp-uncss'),
	autoprefixer = require('gulp-autoprefixer');
 
// connect server
 gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    livereload: true 
  });
});

// css
gulp.task('css', function () {
  return gulp.src('src/scss/**/*.scss')
  	.pipe(sass().on('error', sass.logError))
    .pipe(concatCss("style.css")) 
    // .pipe(cleanCSS({compatibility: 'ie10'})) //Минифицировать css
    .pipe(autoprefixer('last 15 version'))
    // .pipe(uncss({html: ['dist/**/*.html']}))  //Удалить не используемые css
    .pipe(gulp.dest('dist/css/'))
    .pipe(connect.reload());
});

// html
gulp.task('html', function(){
	gulp.src('dist/*.html' )
	.pipe(connect.reload());
})

// watch
gulp.task('watch', function(){
	gulp.watch('src/**/*.scss', ['css']);
	gulp.watch('dist/*.html', ['html']);
});

// default
gulp.task('default', ['connect', 'html', 'css', 'watch']);