var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('default', ['content'], () => {
	gulp.watch('./client/**/*.*', ['content']);
})

gulp.task('serve', ['content'], () => {
browserSync.init({
	proxy: "localhost:5000"
})
	gulp.watch('./client/**/*.*', ['content']);
});

gulp.task('content', () => {
	gulp.src('./client/**/*.*')
		.pipe(gulp.dest('./server/public/dist'))
		.pipe(reload({stream: true}));
});
