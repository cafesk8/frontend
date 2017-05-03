var gulp = require('gulp');
var plugins = require("gulp-load-plugins")({
	pattern: ['gulp-*', 'gulp.*', 'main-bower-files','del'],
	replaceString: /\bgulp[\-.]/
});

gulp.task('clean_vendor_assets',function(){
	plugins.del(['dist/vendor/*']);
})

gulp.task('bowerify', ['clean_vendor_assets'], function() {
	return gulp.src(plugins.mainBowerFiles())
		.pipe(plugins.bowerNormalize({bowerJson: './bower.json'}))
		.pipe(gulp.dest('./dist/vendor'));
});

gulp.task('default',['bowerify']);