requirejs(['config'],function(){
	requirejs(['jquery','carousel','floor'],function($,car,floor){
		$('header').load('http://localhost:3000/medicine/html/head.html');
		$('footer').load('http://localhost:3000/medicine/html/foot.html');
		floor.init();



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


			//楼梯
			var bool = true;
			var $louc = $('#loutiNav');
			$louc.find('li').click(function(){
				bool = !bool;
				$(this).find('span').addClass('active').parent().siblings().find('span').removeClass('active');
				var top  = $('#wrap-floor').find('.floor').eq( $(this).index()).offset().top ;
				var half = ($(window).height() - $('.floor').first().height())/2;
				$('html,body').animate({
					'scrollTop': top - half
				},function(){
					//动画结束 改回bool值  让滚动事件正常触发
					bool = true;
				})
			});
			var $floor = $('.floor');
			// console.log($('#loutiNav li').eq(0).find('span'));
			// $('#loutiNav li').eq(0).find('span').addClass('active');
			$(window).scroll(function(){
				if(bool){
					var current = $(window).scrollTop();
					var  index ;
					for (var i=0; i<$floor.length;i++){
						if ( current >= $($floor[i]).offset().top ) {
							index = i;
						}							
					}
					//console.log(index);
					$('#loutiNav li').eq(index).find('span').addClass('active').parent().siblings().find('span').removeClass('active');
				}
			});

			//九层轮播图
			












			
		})
	})
})