//引包
var gulp = require('gulp');
var connect = require('gulp-connect');//创建本地服务器
var minicss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-ruby-sass');



//新建任务
gulp.task('sass',function(){
	sass("./src/sass/*.scss",{style:"compact"}).pipe(gulp.dest("./src/css"));
});

gulp.task('html',function(){
	gulp.src('./src/*html').pipe(connect.reload());
});
gulp.task('css',function(){
	gulp.src('./src/css/*css').pipe(connect.reload());
});
gulp.task('js',function(){
	gulp.src('./src/js/*js').pipe(connect.reload());
});
//livereload自动更新任务
gulp.task('connect', function () {
     connect.server({livereload: true});
});

//监听任务
gulp.task('watch',function(){
	gulp.watch('./src/sass/*.scss',['sass']);
	gulp.watch('./src/css/*css',['css']);
	gulp.watch('./src/js/*js',['js']);
	gulp.watch('./src/*html',['html']);
});

//设置默认任务
gulp.task('default',['connect','watch'])