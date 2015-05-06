var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var header = require('gulp-header');
var pkg = require('./bower.json');

var packageInfo = ['/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @version v<%= pkg.version %>',
    ' * @link <%= pkg.homepage %>',
    ' * @license <%= pkg.license %>',
    ' */',
    ''].join('\n');

gulp.task('default', function() {
    return gulp.src('./lib/*.js')
        .pipe(header(packageInfo, { pkg: pkg }))
        .pipe(concat('jquery.region.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('minify', function() {
    return gulp.src('./lib/*.js')
        .pipe(concat('jquery.region.min.js'))
        .pipe(uglify())
        .pipe(header(packageInfo, { pkg: pkg }))
        .pipe(gulp.dest('./dist/'));
});
