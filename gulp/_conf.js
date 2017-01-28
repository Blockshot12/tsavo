'use strict'

export const dirs = {
  src: 'src',
  html: 'html',
  dist: 'dist'
};

export const paths = {
  local: `./${dirs.dist}`,
  styles: {
    src: `${dirs.src}/scss/**/*.scss`,
    dist: `${dirs.dist}/css`
  },
  scripts: {
    src: `${dirs.src}/js/**/*.js`,
    file: `scripts`,
    dist: `${dirs.dist}/js`
  },
  images: {
    src: `${dirs.src}/img/**/*`,
    dist: `${dirs.dist}/img`
  },
  html: {
    src: `${dirs.html}/**/*.html`,
    dist: `${dirs.dist}`
  }
};
