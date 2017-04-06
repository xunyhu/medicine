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
			//console.log(result[0]);
			$('.zoom').html('<div class="big"><img src="'+ result[0].simg1 +'" data-big="'+ result[0].simg1 +'"></div>\
							<ul>\
								<li class="active"><img src="'+ result[0].simg1 +'"></li>\
								<li><img src="'+ result[0].simg2 +'"></li>\
								<li><img src="'+ result[0].simg3 +'"></li>\
								<li><img src="'+ result[0].simg4 +'"></li>\
							</ul>')
		});


		$(function(){

			//放大镜
			//$('.zoom').children('.big').myzoom({width:380,height:380,gap:20});

			//鼠标移入改变图片
			// var $big = $('.zoom').children('.big img');
			// var $li = $('.zoom').children().find('li');

			// $li.on('mouseover',function(){
			// 	var $src = $(this).children('img')[0].src;
			// 	$big[0].src = $src;				
			// 	$($big[0]).data('big',$src);
			// 	//console.log($($big[0]).data('big'));
			// 	$(this).addClass('active').siblings().removeClass('active');
			// });

			$('.zoom').on('mouseover','li',function(){
				$(this).addClass('active').siblings().removeClass('active');
				$(this).parent().siblings().children()[0].src = $(this).children('img')[0].src;
			});
			// $('.zoom').on('mouseenter','.big',function(){
			// 	$('.big').myzoom({width:380,height:380,gap:20});
			// });


			
		});

	})
})