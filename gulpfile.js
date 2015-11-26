var gulp = require('gulp');
var stylus = require('gulp-stylus');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('copy', function() {
    gulp.src('src/index.html')
    .pipe(gulp.dest('site/'));
});

gulp.task('uglify', function() {
    gulp.src('src/js/**/*.js')
    .pipe(uglify())
    .pipe(rename('app.js'))
    .pipe(gulp.dest('site/js'));
});

gulp.task('stylus', function() {
    gulp.src('src/stylus/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('site/css'));
});

gulp.task('default', ['copy', 'stylus', 'uglify']);
