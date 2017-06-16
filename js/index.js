//定义模块
define(['jquery','top','head','floor','foot'],function($,top,head,floor,foot){
	
	//一般情况下模块会返回一个对象，获取构造函数
	return {
		init : function(){
			this.bind();
			top.init();
			head.init();
			floor.init();
			foot.init();
		},
		
		bind : function(){

			//回到顶部
			var $clieh = $(window).height();
			$(document).scroll(function(){
				var $scoll = $(document).scrollTop();
				if ($scoll > $clieh) {
					
					$("#sideLast").show();
				} else {
					$("#sideLast").hide();
				}
			});
			$("#sideLast").click(function(){
				$('html,body').animate({scrollTop:'0px'},800)
			});
			
			//轮播图上面的图片
			$('.carouselon li').mouseover(function(){
				$(this).siblings().find('span').css({'opacity':'0.1','background':'#ccc'});
			}).mouseleave(function(){
				$('.carouselon li').find('span').css({'opacity':'0','background':'#ccc'});
			});
			
			//轮播图
			//$('.carouselbg li').eq(0).show().siblings().hide();
				var carousel = document.getElementsByClassName('carouselright')[0];
				var ul = carousel.children[0];
				var ll = ul.children[0].offsetWidth;
				//复制第一张图片到最后
				var clone = ul.firstElementChild.cloneNode(true);
				ul.appendChild(clone);
				
				var index = 0 ;
				var len = ul.children.length;
				
				//添加分页效果
				var page = document.createElement('div');
				page.className = 'page';
				for (var i=1;i<len;i++) {
					var span = document.createElement('span');
					span.innerHTML = i;
					if (i===1) {
						span.className = 'active';						
					}
					page.appendChild(span);
				}
				carousel.appendChild(page);
				//点击分页切换
				page.onclick = function (e) {
					e = e || window.event;
					var target = e.target || e.srcElement;
					console.log(1)
					//重置index
					index = target.innerHTML - 1;
					show();
				}
				
				
				ul.style.width = len *　ll + "px";
				//var index = 0 ;
				var timer = setInterval(lunbt,4000);
				
				//定时器函数
				function lunbt () {
					index ++ ;
					show();
				}
				
				function show () {
					var speed ;
					$('.carouselbg li').eq(index).show().siblings().hide();
					//滚动到克隆那张图片时，瞬间将left值改为0,并且把index值改为1
					if (index >= len) {
						ul.style.left = 0;
						index = 1;
					}
					
					
					var target = -index * ll;
					clearInterval(ul.hu);
					ul.hu = setInterval(function(){
						var old = ul.offsetLeft;
						speed = (target - old)/10;
						speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
						
						if (old == target) {
							clearInterval(ul.hu);
							old = target - speed;
						}
						ul.style.left = old + speed + 'px';
					},50);
					
					//添加分页高亮效果
					for (var i=0;i<len-1;i++) {
						page.children[i].className = '';
						
					}
					if (index < len -1) {
						page.children[index].className = 'active';
					}else {
						page.children[0].className = 'active';
					}
					
				}
			
			
			//倒计时
				var time = setInterval(showtime,1000);
				
				
				function showtime() {
					var now = Date.now();
					var d = Date.parse('2018/3/3 12:00:00');
					var haom = parseInt((d - now)/1000);
					
					var sec = haom%60;
					var min = parseInt(haom/60%60);
					var hour = parseInt(haom/60/60%24);
					var day = parseInt(haom/60/60/24);
					
					
					$('#h1').html(parseInt(hour/10));
					$('#h2').html(hour%10);
					$('#h3').html(parseInt(min/10));
					$('#h4').html(min%10);
					$('#h5').html(parseInt(sec/10));
					$('#h6').html(sec%10);
					
				}
			
			//立即购买
			$('.msbuyl li').mouseover(function(){
				$(this).find('.addcat').animate({height:"show"},200).siblings().stop();
			}).mouseleave(function(){
				$(this).find('.addcat').animate({height:"hide"},100);
			})
			
			
			//从数据库获取用户名数据
			$.ajax({
				type : 'post',
				url : 'http://localhost/sfbest/data/idname.php',
				async:true,
				success : function(res) {
					var res = eval('(' + res + ')');
					//console.log(res);
					if (res.state) {
						$('.topMenu').find('#login').html('欢迎您,' + res.clientName + '<a class="logoutA" href="">&nbsp;&nbsp退出</a>').appendTo($('#login'));
					}
					
					
					$('.logoutA').on('click', function() {
						$.post('http://localhost/sfbest/data/logout.php', function(res) {
							window.location.reload();
						})
					})
				}
			});
			
			
			
			
		
		},
	};
})