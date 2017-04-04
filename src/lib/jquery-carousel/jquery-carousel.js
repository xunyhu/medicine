;(function($){
	$.fn.carousel = function(obj){
		var defaults = {
			imglist : [],
			width : 810,
			height : 320,
			autoPlay : true,
			showSmall : false,
			showButton : true,
			page : 'center',
			time : 2000,
			index : 0,
			type : 'top'
		}

		var opt = $.extend({},defaults,obj);

		return this.each(function(){
			var $self = $(this);
			var len = opt.imglist.length;
			init();

			function init(){
				$self.addClass('carousel');
				$self.css('width',opt.width);
				//生成大图html结构
				var imghtml = opt.imglist.map(function(url,idx){
					return '<li><img src="'+ url +'"/></li>';
				}).join('\n');
				var $bigWrap = $('<div/>').addClass('big-wrap');
				var $big = $('<ul/>').addClass('big').html(imghtml);
				$bigWrap.append($big).appendTo($self).css('height',opt.height);

				//轮播方向
				// if(opt.type == 'left'){
				// 	$self.removeClass('leftcarousel');
				// 	$self.css('overflow','hidden');
				// }

				//生成小图html结构
				if(opt.showSmall){
					var $small = $big.clone().attr('class','small').appendTo($self);
					$small.children().find('img').css('width',opt.width/len -10)
					$small.on('click','li',function(){
						opt.index = $(this).index();
						showPic();
					});
				}

				//生成左右按钮
				if(opt.showButton){
					var $btnPrev = $('<div/>').addClass('btn-prev').html('&lt;').appendTo($bigWrap);
					var $btnNext = $('<div/>').addClass('btn-next').html('&gt;').appendTo($bigWrap);

					$btnPrev.click(function(event) {
						opt.index--;
						showPic()
					});
					$btnNext.click(function(event) {
						opt.index++;
						showPic()
					});
				}

				//生成分页
				if(opt.page){
					var page = opt.imglist.map(function(ele,idx){
						return '<span>' + (idx+1) + '</span>';
					}).join('\n');
					var $page = $('<div/>').addClass('page').html(page).appendTo($bigWrap);

					$page.on('click','span',function(){
						opt.index = $(this).index();
						showPic();
					});

					if(opt.page == 'center'){
						$page.addClass('page-center');
					}else if (opt.page == 'left'){
						$page.addClass('page-left');
					}else if (opt.page == 'right'){
						$page.addClass('page-right');
					}
				}


				//设置自动轮播
				if (opt.autoPlay){
					$self.on('mouseenter',function(){
						clearInterval($self.timer);
					}).on('mouseleave',function(){
						$self.timer = setInterval(function(){
							opt.index++;
							showPic();
						},opt.time);
					}).trigger('mouseleave');
				}

				function showPic(){
					if(opt.index >= len){
						opt.index = 0;
					}else if (opt.index < 0){
						opt.index = len - 1;
					}
					//大图动画
					if (opt.type == 'left'){
						$big.animate({
							left : -opt.width*opt.index
						});
					}else {
						$big.animate({
							top : -opt.height*opt.index
						});
					}

					//小图高亮
					if(opt.showSmall){
						$small.children().eq(opt.index).animate({opacity:1}).siblings('li').animate({opacity:0.5});
					}

					//分页高亮
					if(opt.page){
						$page.children().removeClass('active').eq(opt.index).addClass('active');
					}
				}


			}
		});
	}
})(jQuery);