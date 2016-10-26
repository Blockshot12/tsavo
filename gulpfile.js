/**
 * Gulpfile.
 *
 * Implements:
 * 			1. Sass to CSS conversion + uglify
 * 			2. JS concatenation + uglify
 *      3. Vendor JS concatenation + uglify
 *      4. Images minify
 *      5. Fonts minify
 *      6. HTML add partials + minify
 * 			7. Watch files
 *
 * @since 1.0.0
 * @author Blockshot
 */

/**
 * Configuration: Project variables
 *
 * The projectUrl contains the local URL, example.dd:8083.
 */
var project             = 'Tsavo',
    projectUrl          = 'http://www.tsavo.eu',

    styleSrc            = 'src/scss/**/*.scss',
    styleDest           = 'dist/css',

    jsSrc               = 'src/js/*.js',
    jsDest              = 'dist/js/',
    jsFile              = 'scripts',

    jsVendorSrc         = 'src/js/vendors/*.js',

    fontSrc             = 'src/fonts/**/*.ttf',
    fontDest            = 'dist/fonts',

    imgSrc              = 'src/img/**/*',
    imgDest             = 'dist/img',

    htmlSrc             = '*.html',
    partialsSrc         = 'partials/*.html',
    htmlDest            = 'dist',
    SitemapSrc          = 'dist/**/*.html';

/**
 * Configuration: Load plugins
 */
var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    plumber       = require('gulp-plumber'),
    minifycss     = require('gulp-uglifycss'),
    concat        = require('gulp-concat'),
    uglify        = require('gulp-uglify'),
    notify        = require('gulp-notify'),
    autoprefixer  = require('gulp-autoprefixer'),
    sourcemaps    = require('gulp-sourcemaps'),
    rename        = require('gulp-rename'),
    cache         = require('gulp-cache'),
    imagemin      = require('gulp-imagemin'),
    fontmin       = require('gulp-fontmin'),
    htmlmin       = require('gulp-htmlmin'),
    sitemap       = require('gulp-sitemap'),
    path          = require('path'),
    partials      = require('gulp-inject-partials'),
    livereload    = require('gulp-livereload');


/**
 * Task: Sass
 */
gulp.task('sass', function() {
  var onError = function(error) {
    notify.onError({
      title: '<%= error.message %>',
      sound: 'Frog',
      icon: path.join(__dirname, 'help/error.png'),
      contentImage: path.join(__dirname, 'help/sass.png'),
      time: 500,
      onLast: true
    })(error);

    this.emit('end');
  };
  return gulp.src(styleSrc)
    .pipe(plumber({errorHandler: onError}))
    .pipe(sourcemaps.init())
		.pipe(sass({
        style: 'compressed',
        precision: 10
    }))
		.pipe(sourcemaps.write({includeContent:false}))
		.pipe(sourcemaps.init({loadMaps:true}))
		.pipe(autoprefixer(
			'last 2 version',
			'> 1%',
			'safari 5',
			'ie 8',
			'ie 9',
			'opera 12.1',
			'ios 6',
			'android 4'))
    .pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(styleDest))
    .pipe(rename({suffix:'.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest(styleDest))
		.pipe(notify({
      title: 'Sass task completed',
      message: 'All Sass files are compiled into CSS and minified.',
      sound: 'Submarine',
      icon: path.join(__dirname, 'help/check.png'),
      contentImage: path.join(__dirname, 'help/sass.png'),
      time: 500,
      onLast: true
    }))
    .pipe(livereload());
});

/**
 * Task: JS
 */
gulp.task('js', function() {
  return gulp.src([jsVendorSrc,jsSrc])
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
		.pipe(concat(jsFile + '.js'))
		.pipe(gulp.dest(jsDest))
		.pipe(rename( {
			basename: jsFile,
			suffix: '.min'
		}))
		.pipe( uglify() )
		.pipe(gulp.dest(jsDest))
		.pipe(notify({
      title: 'JS task completed',
      message: 'All JS files are saved and minified.',
      sound: 'Submarine',
      icon: path.join(__dirname, 'help/check.png'),
      contentImage: path.join(__dirname, 'help/js.png'),
      time: 500,
      onLast: true
    }))
    .pipe(livereload());
});

/**
 * Task: IMG
 */
gulp.task('img', function() {
  return gulp.src(imgSrc)
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest(imgDest))
    .pipe(notify({
      title: 'Images task completed',
      message: 'All images are saved and minified.',
      sound: 'Submarine',
      icon: path.join(__dirname, 'help/check.png'),
      contentImage: path.join(__dirname, 'help/img.png'),
      time: 500,
      onLast: true
    }))
    .pipe(livereload());
});

/**
 * Task: Font
 */
gulp.task('fontmin', function() {
  return gulp.src(fontSrc)
    .pipe(fontmin())
    .pipe(gulp.dest(fontDest))
    .pipe(notify({
      title: 'Fonts task completed',
      message: 'All fonts are saved and minified.',
      sound: 'Submarine',
      icon: path.join(__dirname, 'help/check.png'),
      contentImage: path.join(__dirname, 'help/font.png'),
      time: 500,
      onLast: true
    }))
    .pipe(livereload());
});

/**
 * Task: html
 */
gulp.task('html', function() {
  return gulp.src(htmlSrc)
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(partials({
      removeTags: true
    }))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(htmlDest))
    .pipe(notify({
      title: 'HTML task completed',
      message: 'All HTML is saved and minified.',
      sound: 'Submarine',
      icon: path.join(__dirname, 'help/check.png'),
      contentImage: path.join(__dirname, 'help/html.png'),
      time: 500,
      onLast: true
    }))
    .pipe(livereload());
});

/**
 * Task: sitemap
 */
gulp.task('sitemap', function () {
  return gulp.src(SitemapSrc, {
      read: false
    })
    .pipe(sitemap({
      siteUrl: projectUrl
    }))
    .pipe(gulp.dest(htmlDest))
    .pipe(notify({
      title: 'Sitemap task completed',
      message: 'Sitemap is generated and saved.',
      sound: 'Submarine',
      icon: path.join(__dirname, 'help/check.png'),
      contentImage: path.join(__dirname, 'help/sitemap.png'),
      time: 500,
      onLast: true
    }));
});

/**
 * Task: Watch
 */
gulp.task('watch', function(){
  livereload.listen();
	gulp.watch(styleSrc, ['sass']);
	gulp.watch(jsSrc, ['js']);
	gulp.watch(imgSrc, ['img']);
	gulp.watch(htmlSrc, ['html']);
	gulp.watch(partialsSrc, ['html']);
});

gulp.task('saved', ['sass','js','img','html']);

gulp.task('default', ['saved','watch']);
