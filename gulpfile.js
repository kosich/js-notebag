'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task( 'build', function(){

  return gulp.src('src/*.js')
    // .pipe($.plumber())
    .pipe($.sourcemaps.init())

    .pipe($.webpack(
        require( './webpack.config.js' )
    ))

    // .pipe($.babel())
    .pipe($.ngAnnotate())
    // .pipe($.uglify())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
} );

gulp.task('watch', function () {
  $.watch('src/*.js', function(){
    gulp.start([ 'build' ]);
  })
});

gulp.task('default', [ 'build', 'watch' ]);
