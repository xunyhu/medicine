
require.config({
//	baseUrl:"js",
	

	paths:{
        'jquery':"../assets/jquery-3.1.1",
        'index':"index",
        'top':"top",
        "head":"head",
        'floor':'floor',
        'sfapp':'sfapp',
        'template':'../assets/template-debug',
        'list':'list',
        'car':'car',
        'login':'login',
    }
})

require(["jquery",'index','list','car','login'],function($,index,list,car,login){
	
	var path = location.pathname;
	console.log(path)
	
	if (path == '/sfbest/') {
		index.init();
	} else if (path == '/sfbest/html/list.html') {
		list.init();
	} else if (path == '/sfbest/html/car.html') {
		car.init();
	} else if (path == '/sfbest/html/login.html') {
		login.init();
	} else if (path == '/sfbest/index.html') {
		index.init();
	}


	
		
});