var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');
var folders = require('gulp-folders');

gulp.task('sass', folders('./', function (folder) {
  return gulp.src(path.join('./', folder, '/styles/*.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(path.join('./', folder)));
}));

gulp.task('sass:watch', function () {
  gulp.watch('./**/styles/*.scss', ['sass']);
});

gulp.task('default', ['sass:watch']);
