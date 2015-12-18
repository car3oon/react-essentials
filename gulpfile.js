var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('js', function () {
    return browserify('./source/app.js')
        .transform(babelify, { presets: ["react"] } )
        .bundle()
        .pipe(source('snapterest.js'))
        .pipe(gulp.dest('./build/'));
});

gulp.task('js-watch', ['js'], function() {
    browserSync.reload();
});

gulp.task('browser-sync', function () {

    browserSync.init({
        server: {
            baseDir: "./build/"
        }
    });
});

gulp.task('default', ['browser-sync'], function() {
    gulp.watch('./source/**/*.js', ['js-watch']);
})
