var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function () {
	return browserify('./app/app.js')
		.bundle()
		.pipe(source('main.js'))
		.pipe(gulp.dest('./dist/js/'))
});

gulp.task('connect', function () {
	connect.server({
		root: 'dist',
		livereload: true,
		port: 4000
	})
});

gulp.task('watch', function () {
	gulp.watch('app/**/*.js', ['browserify'])
});

gulp.task('default', ['connect', 'watch']);