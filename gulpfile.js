var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

// var sourcemaps = require('gulp-sourcemaps');
// var traceur = require('gulp-traceur');
// var concat = require('gulp-concat');
 

gulp.task('default', function () {
  return gulp.src('src/*.js')
    // .pipe($.watch('src/*.js'))
    // .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.traceur({
      // amd, commonjs, closure, instantiate, inline, register
      // modules : 'commonjs'
      modules : undefined
    }))
    .pipe($.concat('b.js'))
    // .pipe($.webpack())
    // .pipe($.uglify())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));

});

