requirejs(['config'],function(){
	requirejs(['jquery'],function($){
		$('header').load('http://localhost:3000/medicine/html/head.html');
		$('footer').load('http://localhost:3000/medicine/html/foot.html');

		//console.log(location.search);
		var goodsid = location.search.substring(1).split('=');
		//console.log(goodsid);
		//console.log(decodeURI(goodsid));
		var id = goodsid[1];

		$.get('http://localhost:3000/medicine/api/details.php',{'num':id},function(res){
			//console.log(res);
			var result = JSON.parse(res);
			console.log(result);
		})
	})
})