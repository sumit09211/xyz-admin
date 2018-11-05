var gulp  = require('gulp'),
    sass  = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),

    input  = {
        'sass': 'assets/src/scss/**/*.scss',
        'javascript': ['assets/src/js/vendors/jquery.js', 'assets/src/js/vendors/jquery-ui.min.js', 'assets/src/js/vendors/bootstrap.bundle.min.js', 'assets/src/js/plugins/*.js', 'assets/src/js/*.js'],
        'fonts': 'node_modules/@fortawesome/fontawesome-free/webfonts/*'
    },

    output = {
        'stylesheets': 'assets/build/css',
        'javascript': 'assets/build/js',
        'fonts': 'assets/build/fonts'
    };

/* compile scss files */
gulp.task('build-css', function() {
    return gulp.src(input.sass)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(postcss([ autoprefixer("last 2 version")]))
    .pipe(sourcemaps.write('../css/maps'))
    .pipe(gulp.dest(output.stylesheets));
});

/* concat javascript files*/
gulp.task('build-js', function() {
  return gulp.src(input.javascript)
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('../js/maps'))
    .pipe(gulp.dest(output.javascript));
});

/* Generate fontAwesome */
gulp.task('fonts', function() {
  return gulp.src(input.fonts)
    .pipe(gulp.dest(output.fonts));
});

/* Watch these files for changes and run the task on update */
gulp.task('generate', function() {
    gulp.watch(input.sass, ['build-css']);
    gulp.watch(input.javascript, ['build-js']);
    gulp.watch(input.fonts, ['fonts']);
});

/* run the watch task when gulp is called without arguments */
gulp.task('default', ['generate']);
