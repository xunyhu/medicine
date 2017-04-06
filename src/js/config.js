//配置文件
requirejs.config({
	// bashUrl : 'js',

	paths : {
		'jquery' : '../lib/jquery-3.1.1',
		'temp' : '../lib/template-debug',
		'index' : 'index',
		'carousel' : '../lib/jquery-carousel/jquery-carousel',
		'floor' : 'floor',
		'myzoom' : '../lib/jquery-myzoom/jquery-myzoom'
	},
	shim : {
		'carousel' : ['jquery'],
		'myzoom' : ['jquery']
	}
});

