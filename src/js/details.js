requirejs(['config'],function(){
	requirejs(['jquery','myzoom'],function($,myzoom){
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
		});


		$(function(){
			//鼠标移入改变图片
			var $big = $('.zoom').find('.big img');
			var $li = $('.zoom').children().find('li');

			$li.on('mouseover',function(){
				$big[0].src = $(this).children('img')[0].src;
				$big[0].data = $(this).children('img')[0].data;
				$(this).addClass('active').siblings().removeClass('active');
			});


			//放大镜
			//$('.big').myzoom({width:380,height:380});
		})

	})
})