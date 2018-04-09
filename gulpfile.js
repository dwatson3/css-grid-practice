var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {

	browserSync.initi({
		server: {
			baseDir: "./"
		}
	});

	gulp.watch(["./*.html", "./css/*css"]).on('change', browserSync.reload);
})
