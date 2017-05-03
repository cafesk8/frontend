var gulp = require('gulp');
var plugins = require("gulp-load-plugins")({
	pattern: ['gulp-*', 'gulp.*', 'main-bower-files','del'],
	replaceString: /\bgulp[\-.]/
});
var vendor = require('gulp-concat-vendor');

gulp.task('clean_vendor_assets',function(){
	plugins.del(['dist/vendor/*']);
})

gulp.task('bowerify', ['clean_vendor_assets'], function() {
	return gulp.src(plugins.mainBowerFiles('**/*.js'))
		.pipe(vendor('libs.min.js'))
		.pipe(gulp.dest('./dist/vendor'));
});

gulp.task('css',['bowerify'],function(){
	// return gulp.src(['./dist/vendor/css/*']).
	// 	pipe(plugins.concat('merged.css')).
	// 	pipe(gulp.dest('./dist/css'));
})

gulp.task('js',['bowerify'],function(){
	// return gulp.src(['./dist/vendor/js/*']).
	//  	pipe(vendor('merged-libs.js')).
	//  	pipe(gulp.dest('./dist/js'));	
})

gulp.task('default',['bowerify','css','js']);