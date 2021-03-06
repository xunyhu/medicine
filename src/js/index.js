requirejs(['config'],function(){
	requirejs(['jquery','carousel','floor'],function($,car,floor){
		$('header').load('html/head.html',function(){
			//地区选择
			$('header').on('click','.top-left ul span',function(){
					$('.city').text($(this).html());
			});
			//分类菜单显示
			$('header').find('.goodsfl').show();


			$.post('api/usename.php', function(res) {
				var $obj = eval('(' + res + ')');
				if($obj.state) {
					$('.first').html('欢迎您,' + $obj.nowUser + '<a class="logoutA" href="">退出</a>');
					$('.second').text(' ');
				}


				$('.logoutA').on('click', function() {
					$.post('api/quit.php', function(res) {
						window.location.reload();
					})
				});
			});
		});
		$('footer').load('html/foot.html');
		floor.init();



		$(function(){
			
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

			$(window).scroll(function(){
				if(bool){
					var current = $(window).scrollTop();
					//楼梯显示隐藏
					if (current > 896 && current < 5130) {
						$('#loutiNav').show();
					} else {
						$('#loutiNav').hide();
					}
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
			var $a = $('#wrap-floor').find('.lunbtu');
			$($a[0]).carousel({
				imglist : ['images/floor1-1.jpg','images/floor1-2.jpg','images/floor1-3.jpg'],
				width : 605,
				height : 284
			});
			$($a[1]).carousel({
				imglist : ['images/floor2-1.jpg','images/floor2-2.jpg','images/floor2-3.jpg'],
				width : 605,
				height : 284
			});
			$($a[2]).carousel({
				imglist : ['images/floor3-1.jpg','images/floor3-2.jpg','images/floor3-3.jpg'],
				width : 605,
				height : 284
			});
			$($a[3]).carousel({
				imglist : ['images/floor4-1.jpg','images/floor4-2.jpg'],
				width : 605,
				height : 284
			});
			$($a[4]).carousel({
				imglist : ['images/floor5-1.jpg','images/floor5-2.jpg'],
				width : 605,
				height : 284
			});
			$($a[5]).carousel({
				imglist : ['images/floor6-1.jpg','images/floor6-2.jpg'],
				width : 605,
				height : 284
			});
			$($a[6]).carousel({
				imglist : ['images/floor7-1.jpg','images/floor7-2.jpg','images/floor7-3.jpg'],
				width : 605,
				height : 284
			});
			$($a[7]).carousel({
				imglist : ['images/floor8-1.jpg','images/floor8-2.jpg'],
				width : 605,
				height : 284
			});
			$($a[8]).carousel({
				imglist : ['images/floor9-1.jpg','images/floor9-2.jpg'],
				width : 605,
				height : 284
			});
			var $b = $('#wrap-floor').find('.frleft h4');
			var $c = $('#wrap-floor').find('.floor');
			//console.log($b[1]);
			$($b[1]).css({'background':'#8cd7d3'});
			$($c[1]).css({'border-top':'1px solid #8cd7d3'});
			$($b[2]).css({'background':'#ffa27a'});
			$($c[2]).css({'border-top':'1px solid #ffa27a'});
			$($b[3]).css({'background':'#ff6b6b'});
			$($c[3]).css({'border-top':'1px solid #ff6b6b'});
			$($b[4]).css({'background':'#f6c89e'});
			$($c[4]).css({'border-top':'1px solid #f6c89e'});
			$($b[5]).css({'background':'#aee177'});
			$($c[5]).css({'border-top':'1px solid #aee177'});
			$($b[6]).css({'background':'#ffacd0'});
			$($c[6]).css({'border-top':'1px solid #ffacd0'});
			$($b[7]).css({'background':'#cac3f2'});
			$($c[7]).css({'border-top':'1px solid #cac3f2'});
			$($b[8]).css({'background':'#fcb0c0'});
			$($c[8]).css({'border-top':'1px solid #fcb0c0'});





			//图片淡入淡出
			$('.flashsale').on('mouseover','img',function(){
				$(this).css({'opacity':'.9'});
			}).on('mouseleave','img',function(){
				$(this).css({'opacity':'1'});
			})







			
		})
	})
})