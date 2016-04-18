var gulp = require('gulp')
var connect = require('gulp-connect')
var browserify = require('browserify')
var source = require('vinyl-source-stream')

gulp.task('browserify', function () {
	return browserify('./app/app.js')
		.bundle()
		.pipe(source('main.js'))
		.pipe(gulp.dest('./public/js/'))
})

gulp.task('connect', function () {
	connect.server({
		root: 'public',
		port: 4000
	})
})