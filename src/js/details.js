requirejs(['config'],function(){
	requirejs(['jquery','myzoom'],function($,myzoom){
		$('header').load('head.html',function(){
			//分类菜单显示
			var timer;
			$('.selection').hover(function(){
				clearTimeout(timer);
				$('.goodsfl').show();
			},function(){
				timer = setTimeout(function(){
					$('.goodsfl').hide();
				},2000);
			});
			//地区选择
			$('.top-left').on('click','span',function(){
				$('.city').text($(this).text());
			})


			$.post('../api/usename.php', function(res) {
				var $obj = eval('(' + res + ')');
				if($obj.state) {
					$('.first').html('欢迎您,' + $obj.nowUser + '<a class="logoutA" href="">退出</a>');
					$('.second').text(' ');
				}


				$('.logoutA').on('click', function() {
					$.post('../api/quit.php', function(res) {
						window.location.reload();
					})
				});
			});
		});
		$('footer').load('foot.html');

		//console.log(location.search);
		var goodsid = location.search.substring(1).split('=');
		//console.log(goodsid);
		//console.log(decodeURI(goodsid));
		var id = goodsid[1];

		$.get('../api/details.php',{'num':id},function(res){
			//console.log(res);
			var result = JSON.parse(res);
			//console.log(result[0]);
			$('.zoom').html('<div class="big"><img src="'+ result[0].simg1 +'" data-big="'+ result[0].simg1 +'"></div>\
							<ul>\
								<li class="active"><img src="'+ result[0].simg1 +'"></li>\
								<li><img src="'+ result[0].simg2 +'"></li>\
								<li><img src="'+ result[0].simg3 +'"></li>\
								<li><img src="'+ result[0].simg4 +'"></li>\
							</ul>');

			$('.introduce').html('<h1><span>'+ result[0].type +'</span>'+ result[0].description +'</h1>\
								<p>'+ result[0].introduce +'</p>\
								<p>药网价:<span>￥'+ result[0].price +'</span>  累计评论：'+ result[0].commen +'</p>\
								<p>规格：<span>100粒</span><span>VE160粒+VC80粒</span><span>VE90粒+VC80粒</span></p>\
								<p>套餐：<span>￥119/1件</span><span>[内外服用]祛斑养颜</span></p>\
								<dl>\
									<dt>数量：</dt>\
									<dd>\
										<div>\
											<input type="text" value="1" id="amount">\
											<span id="add">v</span>\
											<span id="cut">v</span>\
										</div>\
									</dd>\
								</dl>\
								<p class="scan"><i></i>手机扫码更方便 ， <span>立即扫码</span>></p>\
								<input type="button" value="加入购物车" id="addcar">\
								<p>本商品由1药网销售和发货 </p>\
								<p>18:00前下单预计当天出库，部分城市支持次日达。 运费详情 >></p>');


			//商品数量增加减少
			$('#add').click(function(){
				$('#amount')[0].value++;
			});
			$('#cut').click(function(){
				if ($('#amount')[0].value > 1) {
					$('#amount')[0].value--;
				}				
			});

			//放大镜
			$('.big').myzoom({width:380,height:380,gap:20});
			//鼠标移入改变图片
			$('.zoom').on('mouseover','li',function(){
				$(this).addClass('active').siblings().removeClass('active');
				$(this).parent().siblings().children()[0].src = $(this).children('img')[0].src;
				$(this).parent().siblings().children()[0].dataset.big = $(this).children('img')[0].src;
			});

		});


		

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

			
			// $('.zoom').on('mouseenter','.big',function(){
			// 	$('.big').myzoom({width:380,height:380,gap:20});
			// });

			

			//回到顶部
			$('.topback').click(function(){
				$('html,body').animate({scrollTop:'0px'},'slow');
			});

			//吸顶
			function nav(){
		      var height=0;
		          height = $(".xiding").offset().top;
		          //console.log(height);
		      $(window).scroll(function() {
		        var w = $("body").scrollTop() || $(document).scrollTop(); //获取滚动值
		        if(w > height) {
					$(".xiding").addClass("topactive");
				} else if(w <= 0){
					$(".xiding").removeClass("topactive")
				}else{
					$(".xiding").removeClass("topactive")
			  	}
		      });
		    }
		    $(window).scroll(function(){
		    	nav()
		    });
			
			
			//购物车图标hover显示
			var timer;
			$('.car').on('mouseover',function(){
				clearTimeout(timer);
				$('.nothing').css({
					display : 'block'
				})
			}).on('mouseleave',function(){
				timer = setTimeout(function(){
					$('.nothing').hide();
				},1000);
			});


			
			

			
		

	})
})