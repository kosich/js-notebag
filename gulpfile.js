'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

var PATHS = {
    src : {
        scripts : 'src/**/*.js',
        templates : ['src/**/*.html', '!src/index.html']
    },
    dest : 'dist'
}

gulp.task( 'scripts', function(){

    return gulp.src(PATHS.src.scripts)
    // .pipe($.plumber())
    // NOTE: currently source maps dont work
    .pipe($.sourcemaps.init())

    .pipe($.webpack(
        // here some webpack-babel plugin is applied
        require( './webpack.config.js' )
    ))
    .pipe($.ngAnnotate())
    .pipe($.uglify())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(PATHS.dest));
} );

gulp.task('templates', function(){
    gulp.src(PATHS.src.templates)
    .pipe($.angularTemplatecache({
        standalone: true
    }))
    .pipe(gulp.dest(PATHS.dest));
});

gulp.task('watch', function () {

  $.watch(PATHS.src.scripts, function(){
    gulp.start([ 'scripts' ]);
  });

  $.watch(PATHS.src.templates, function(){
    gulp.start([ 'templates' ]);
  });

});

gulp.task('default', [ 'templates', 'scripts', 'watch' ]);
