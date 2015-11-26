var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');

gulp.task('copy', function() {
    gulp.src('src/index.html')
    .pipe(gulp.dest('site/'));
});

gulp.task('js', function() {
    gulp.src('src/js/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('site/js'));
});

gulp.task('stylus', function() {
    gulp.src('src/stylus/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('site/css'));
});

gulp.task('default', ['copy', 'stylus', 'js']);
