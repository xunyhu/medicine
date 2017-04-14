;(function($){
	$.fn.carousel = function(options){
		var defaults = {
			imglist:[],//必要参数
			width:810,
			height:320,
			autoPlay:true,
			showSmall:false,
			showButton:true,
			page:'center',//center,left
			duration:3000,
			index:0,
			type:'vertical'//fade:淡入淡出, vertial:垂直滚动(默认), horizontal:水平滚动, show:幻灯片
		}

		// 扩展默认值
		var opt = $.extend({},defaults,options);

		return this.each(function(){
			var $self = $(this);

			var len = opt.imglist.length;

			// 初始化
			init();

			function init(){
				// 添加专有样式
				$self.addClass('gdscarousel');



				// 生成大图
				var imghtml = opt.imglist.map(function(url,idx){
					return '<li><img src="'+url+'"/></li>';
				}).join('\n');

				var $bigWrap = $('<div/>').addClass('big-wrap');
				var $big = $('<ul/>').addClass('big').html(imghtml);

				$bigWrap.append($big).appendTo($self);

				// 生成小图
				if(opt.showSmall){
					var $small = $big.clone().attr('class','small').appendTo($self);

					// 点击小图切换
					$small.on('click','li',function(){
						opt.index = $(this).index();
						showPic();
					});
				}

				// 生成左右按钮
				/*if(opt.showButton){
					var $btnPrev = $('<div/>').addClass('btn-prev').html('&lt;').appendTo($bigWrap);
					var $btnNext = $('<div/>').addClass('btn-next').html('&gt;').appendTo($bigWrap);

					// 上下按钮点击
					$btnPrev.on('click',function(){
						opt.index--;
						showPic();
					});
					$btnNext.on('click',function(){
						opt.index++;
						showPic();
					})
				}*/

				// 生成分页
				if(opt.page){

					var $page = $('<div/>').addClass('page').html(opt.imglist.map(function(url,idx){
						return '<span>' + (idx+1) + '</span>';
					}).join('\n'));

					// 点击分页切换
					$page.appendTo($bigWrap).on('click','span',function(){
						opt.index = $(this).index();
						showPic();
					});

					if(opt.page == 'center'){
						$page.addClass('page-center');
					}
					
				}


				// 设置样式
				$self.css({
					width:opt.width
				});
				$bigWrap.css('height',opt.height)


				// 轮播（垂直）
				if(opt.autoPlay){
					// 鼠标移入移出
					$big.append($big.html())
					$self.on('mouseenter',function(){
						clearInterval($self.timer)
					}).on('mouseleave',function(){
						$self.timer = setInterval(function(){
							opt.index++;
							showPic();
						},opt.duration);
					}).trigger('mouseleave');
				}

				// 刷新页面，高亮当前小图
				showPic();


				// 显示图片
				function showPic(){
					if(opt.index >len){
						$big.css({
							left:0
						})
						opt.index = 1;
					
					}else if(opt.index < 0){
						opt.index = len - 1;
					}

					// 大图动画
					$big.animate({
						left:-opt.width*opt.index,
					});

					// 小图高亮
					if(opt.showSmall){
						$small.children().eq(opt.index).animate({opacity:1}).siblings('li').animate({opacity:0.5});
					}

					// 分页高亮
					if(opt.page){
						//console.log(opt.index)
						if (opt.index==len) {
							$page.children().removeClass('active').eq(0).addClass('active');
						}else{
							$page.children().removeClass('active').eq(opt.index).addClass('active');
						}
						
					}
				}
			}
		});

	}
})(jQuery);