let gulp = require('gulp'),
	browserSync = require('./browserSync');

gulp.task('watch', ['styles', 'html'], function() {
	
	browserSync.init({
		notify: false,
		server: "./app"
	})

	gulp.watch('app/**/*.html', ['html']);

	gulp.watch('app/assets/styles/**/*.css', ['styles']);

});


