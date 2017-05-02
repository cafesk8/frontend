var gulp = require('gulp');
var plugins = require("gulp-load-plugins")({
	pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
	replaceString: /\bgulp[\-.]/
});

console.log(plugins);

gulp.task('default', function() {
	return gulp.src(plugins.mainBowerFiles())
		.pipe(plugins.bowerNormalize({bowerJson: './bower.json'}))
		.pipe(gulp.dest('./dist/vendor'));
});