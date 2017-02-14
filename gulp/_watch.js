'use strict';

import gulp from 'gulp';
import * as conf from './_conf';

gulp.task('watch', ['build'], () => {
  gulp.watch(conf.paths.styles.src, ['build']);
  gulp.watch(conf.paths.scripts.src, ['build']);
  gulp.watch(conf.paths.images.src, ['build']);
  gulp.watch(conf.paths.html.src, ['build']);
  gulp.watch(conf.paths.html.partials, ['build']);
});
