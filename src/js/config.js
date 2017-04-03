//配置文件
requirejs.config({
	bashUrl : 'js',

	paths : {
		'jquery' : '../lib/jquery-3.1.1',
		'temp' : '../lib/template-debug',
		'index' : 'index',
		'top' : 'top'
	}
});

//加载模块
requirejs(['index'],function(index){
	
})