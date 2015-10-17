var	gulp = require('gulp'),
		babel = require('gulp-babel'),
		run = require('gulp-run'),
		runSequence = require('run-sequence'),
		rename = require('gulp-rename');

gulp.task('transpile:electron',function(){
	return gulp.src('electron/index.es6.js')
		.pipe(babel())
		.pipe(rename('index.js'))
		.pipe(gulp.dest('build'));
});

gulp.task('bundleBrowser',function(){
	return run("cd browser && npm run build && cp build/index.html ../build/index.html && cp build/bundle.js ../build/bundle.js").exec();
});

gulp.task('build', function(){
	return runSequence('transpile:electron','bundleBrowser');
});
