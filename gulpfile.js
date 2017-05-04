var gulp = require('gulp');
var plugins = require("gulp-load-plugins")({
	pattern: ['gulp-*', 'gulp.*', 'main-bower-files','del'],
	replaceString: /\bgulp[\-.]/
});
var vendor = require('gulp-concat-vendor');

gulp.task('clean_vendor_assets',function(){
	plugins.del(['build/vendor/*']);
})

gulp.task('bowerify', ['clean_vendor_assets'], function() {
	return gulp.src(plugins.mainBowerFiles('**/*.js'))
		.pipe(vendor('libs.js'))
		.pipe(gulp.dest('./build/vendor'));
});

gulp.task('css',['bowerify'],function(){
	// return gulp.src(['./build/vendor/css/*']).
	// 	pipe(plugins.concat('merged.css')).
	// 	pipe(gulp.dest('./build/css'));
})

gulp.task('js',['bowerify'],function(){
	// return gulp.src(['./build/vendor/js/*']).
	//  	pipe(vendor('merged-libs.js')).
	//  	pipe(gulp.dest('./build/js'));	
})

/* Minify / concat etc. to dist folder */

gulp.task('default',['bowerify','css','js']);