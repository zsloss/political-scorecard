var gulp = require('gulp');
var stylus = require('gulp-stylus');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('copy', function() {
    gulp.src('src/index.html')
    .pipe(gulp.dest('site'));
});

gulp.task('js', function() {
    browserify('src/js/app.js')
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('site/js'))
});

gulp.task('stylus', function() {
    gulp.src('src/stylus/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('site/css'));
});

gulp.task('default', ['copy', 'stylus', 'js']);
