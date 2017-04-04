requirejs(['config'],function(){
	requirejs(['jquery','carousel'],function($,car){
		$('header').load('http://localhost:3000/medicine/html/head.html');
		$('footer').load('http://localhost:3000/medicine/html/foot.html');




		$(function(){
			//地区选择
			$('header').on('click','.top-left ul span',function(){
					$('.city').text($(this).html());
			});
			//分类菜单显示
			$('header').find('.goodsfl').show();
			//轮播图
			$('.bannerleft').carousel({
				imglist : ['images/banner1.jpg','images/banner2.jpg','images/banner3.jpg','images/banner4.jpg','images/banner5.jpg','images/banner6.jpg'],
				width : 750,
				height : 400
			});
			$('.bannerright').load('html/banner.html');

			//轮播图右边tab切换
			$('.bannerright').on('click','span',function(){
				//console.log(1);
				$(this).addClass('active1').siblings().removeClass('active1');
				var $idx = $(this).index();
				$(this).parent().next().children().eq($idx).show().siblings().hide();
			});

			//底部tab切换
			$('.blogroll .title span').mouseover(function(){
				$('.centent').children().eq($(this).index()).show().siblings().hide();
				$(this).addClass('active2').siblings().removeClass('active2');
			})
			//底部友情链接
			var $ul = $('<ul\>');
			for (var i=0; i<20;i++){
				$('<li\>').html('<a href="javascript:;">心理咨询</a>').appendTo($ul);
			};
			$('.broll').append($ul);
		})
	})
})