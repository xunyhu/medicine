//引包
var gulp = require('gulp');
var sass = require('gulp-sass');
var browser = require('browser-sync');
var uglify = require('gulp-uglify');


//新建任务
gulp.task('sass',function(){
	gulp.src('./src/sass/*scss')
		.pipe(sass({outputStyle: 'compact'}))
		.pipe(gulp.dest('./src/css/'))
});

gulp.task('server',function(){
	browser({
		proxy : 'http://localhost/medicine/',
		files : ['./src/**/*.html','./src/css/*css','./src/js/*js']
	});
	gulp.watch('./src/sass/*.scss',['sass']);
})