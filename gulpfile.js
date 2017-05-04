var gulp = require('gulp'),
	plugins = require("gulp-load-plugins")({
		pattern: ['gulp-*', 'gulp.*', 'main-bower-files','del'],
		replaceString: /\bgulp[\-.]/
	}),
	folder = {
		src: 'src/',
		build: 'build/',
		dist: 'dist/'
	};

gulp.task('clean_vendor_assets',function(){
	plugins.del([folder.build+'*']);
})

gulp.task('bowerify', ['clean_vendor_assets'], function() {
	return gulp.src(plugins.mainBowerFiles('**/*.js'))
		.pipe(plugins.concatVendor('libs.js'))
		.pipe(gulp.dest(folder.build+'vendor'));
});

gulp.task('css',['bowerify'],function(){
	// return gulp.src(['./build/plugins.concatVendor/css/*']).
	// 	pipe(plugins.concat('merged.css')).
	// 	pipe(gulp.dest('./build/css'));
})

gulp.task('js',['bowerify'],function(){
	// return gulp.src(['./build/plugins.concatVendor/js/*']).
	//  	pipe(plugins.concatVendor('merged-libs.js')).
	//  	pipe(gulp.dest('./build/js'));	
})

gulp.task('default',['bowerify','css','js']);