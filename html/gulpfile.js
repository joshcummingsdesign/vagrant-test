'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('watch', function() {
  browserSync.init({
    server: {
      proxy: './'
    },
    open: false
  });
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./*.css').on('change', browserSync.reload);
});
