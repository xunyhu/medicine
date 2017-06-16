//引入模块
var gulp = require('gulp');

var sass = require('gulp-ruby-sass');//编译

var connect = require('gulp-connect');//动态刷新

var concat = require('gulp-concat');//合并js文件

var rename = require('gulp-rename');//重命名

var uglify = require('gulp-uglify');//压缩js


//新建任务
gulp.task('refresh',function(){
	gulp.src("./*.html").pipe(connect.reload());
})

gulp.task('sass',function(){
	sass("./sass/*.scss",{style:"compact"}).pipe(gulp.dest("css"));
})

gulp.task('css',function(){
	gulp.src("./css/*.css").pipe(connect.reload());
})

gulp.task('html',function(){
	gulp.src("./html/*.html").pipe(connect.reload());
})

//监听
gulp.task("watch",function(){
	connect.server({livereload:true});
	
	gulp.watch('./*.html',['refresh']);
	gulp.watch('./html/*.html',['refresh']);
	gulp.watch('./sass/*.scss',['sass']);
	gulp.watch('./css/*.css',['css']);
})
