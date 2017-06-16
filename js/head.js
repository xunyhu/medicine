define(['jquery','template'],function($,template){
	
	return {
		
		init : function(){
			 $(".topMenu").append( this.template.headNav() );
			 $(".topMenu").append( this.template.headRight() );
			 $(".header").append( this.template.headSh() );
			 $(".navmenu").append( this.template.headRr() );
			 $(".navmenu").append( this.template.headY() );
			 //也可以用load方法加载到页面来
			 this.bind();
		},
		
		template : {
			headNav : template.compile('<ul class="fl">\
							<li>冷链配送 99元顺丰到家 送至：</li>\
							<li class="topcity">\
								<span class="nowcity">广州<b></b></span>\
								<div class="chosecity">\
									<p >请选择您的收货城市：</p>\
									<p class="cc"><span>北京</span><span>上海</span><span>广州</span><span>深圳</span><span>杭州</span><span>成都</span>\
									   <span>衡阳</span><span>长沙</span><span>天津</span>\
									</p>\
									<ul>\
										<li><a>更多城市：</a></li>\
										<li><a>华东：</a><span>上海</span><span>浙江</span><span>江苏</span><span>安徽</span></li>\
										<li><a>华南：</a><span>广州</span><span>福建</span><span>海南</span><span>广西</span></li>\
										<li><a>华北：</a><span>北京</span><span>天津</span><span>内蒙古</span><span>山西</span>\
											<span>山东</span><span>河北</span>\
										</li>\
										<li><a>华中：</a><span>湖南</span><span>湖北</span><span>江西</span><span>河南</span></li>\
										<li><a>东北：</a><span>辽宁</span><span>吉林</span><span>黑龙江</span></li>\
										<li><a>西南：</a><span>重庆</span><span>贵州</span><span>云南</span><span>西藏</span></li>\
										<li><a>西北：</a><span>陕西</span><span>甘肃</span><span>宁夏</span><span>新疆</span></li>\
									</ul>\
								</div>\
							</li>\
						</ul>'),
			
			headRight : template.compile('<ul class="fr toprigth">\
								<li class="login" id="login">\
										<span>嘿，欢迎来顺丰优选！</span>\
										<a href="html/login.html">请登入&nbsp;&nbsp;</a>\
										<a href="html/regsiter.html">免费注册</a>\
								</li>\
								<li><a>我的订单</a></li>\
								<li class="meyx"><a>我的优选</a> <b></b>\
									<ul>\
										<li><a>我的订单</a></li>\
										<li><a>我的积分</a></li>\
										<li><a>我的珍藏</a></li>\
										<li><a>我的会员卡</a></li>\
										<li><a>我的优惠券</a></li>\
									</ul>\
								</li>\
								<li class="yidong"><a>移动客户端</a><b></b>\
									<div></div>\
								</li>\
								<li class="hcenter"><a>帮助中心</a><b></b></li>\
								<li class="webnav"><a>网站导航</a><b></b></li>\
								<li class="weib"><a title="关注顺丰优选微博" target="_blank"> </a></li>\
								<li class="weix"><a title="关注顺丰优选微信">  </a></li>\
						</ul>'),
			
			headSh : template.compile('<div class="logo">\
						<div class="topad"><a href="html/list.html"><img src="images/index2.gif"/></a></div>\
						<a href="../index.html" title="顺丰速运" class="logoleft"></a>\
						<a href="../index.html" title="顺丰优选" class="logoright"></a>\
						<div class="logo-text"><img src="images/logo_word.jpg"/></div>\
						</div>\
						<div class="search">\
							<form class="searchForm">\
			        				<input type="text" class="text" value="牛肉" style="color: rgb(153, 153, 153);" />\
			        				<input type="button" class="submit" value="" />\
			    			</form>\
			    			<div class="search_hot">\
			        				<a>牛奶</a>\
			        				<a>酸奶</a>\
			        				<a>酸奶</a>\
			        				<a>酸奶</a>\
			        				<a>酸奶</a>\
			        				<a>酸奶</a>\
			        				<a>酸奶</a>\
			        				<a>酸奶</a>\
			        		</div>\
						</div>\
						<div class="topcar" id="topcar">\
							<s class="setCat"></s>\
			    			<a href="http://localhost/sfbest/html/car.html">我的购物车</a>\
			    			<b id="cartNum">0</b>\
						</div>'),
			
			headRr : template.compile('<div class="categories">'+
							'<div class="selection">精选商品分类</div>'+
							'<div class="goodsfl">'+
								'<ul>'+
									'<li>'+
										'<h3>肉类海鲜</h3>'+
										'<p>牛肉&nbsp;&nbsp;羊肉&nbsp;&nbsp;海鲜&nbsp;&nbsp;鱼&nbsp;&nbsp;</p>'+
										'<div class="hh">'+
											'<dl>'+
												'<dt>母婴用品</dt>'+
												'<dd>'+'|'+'奶粉'+'|'+'一段'+'|'+'奶粉'+'|'+'一段'+'|'+'奶粉'+'|'+'一段'+'|'+'奶粉'+'|'+'一段'+'</dd>'+
											'</dl>'+
											'<div class="ll"><img src="images/navh1.jpg"/></div>'+
										'</div>'+
									'</li>'+
									'<li>'+
										'<h3>肉类海鲜</h3>'+
										'<p>牛肉&nbsp;&nbsp;羊肉&nbsp;&nbsp;海鲜&nbsp;&nbsp;鱼&nbsp;&nbsp;</p>'+
										'<div class="hh">'+
											'<dl>'+
												'<dt>母婴用品</dt>'+
												'<dd>'+'|'+'奶粉'+'|'+'一段'+'|'+'奶粉'+'|'+'一段'+'|'+'奶粉'+'|'+'一段'+'|'+'奶粉'+'|'+'一段'+'</dd>'+
											'</dl>'+
											'<div class="ll"><img src="images/navh2.jpg"/></div>'+
										'</div>'+
									'</li>'+
									'<li>'+
										'<h3>肉类海鲜</h3>'+
										'<p>牛肉&nbsp;&nbsp;羊肉&nbsp;&nbsp;海鲜&nbsp;&nbsp;鱼&nbsp;&nbsp;</p>'+
										'<div class="hh">'+
											'<dl>'+
												'<dt>母婴用品</dt>'+
												'<dd>|奶粉|一段|奶粉|一段|奶粉|一段|奶粉|一段</dd>'+
											'</dl>'+
											'<div class="ll"><img src="images/navh3.jpg"/></div>'+
										'</div>'+
									'</li>'+
									'<li>'+
										'<h3>肉类海鲜</h3>'+
										'<p>牛肉&nbsp;&nbsp;羊肉&nbsp;&nbsp;海鲜&nbsp;&nbsp;鱼&nbsp;&nbsp;</p>'+
										'<div class="hh">'+
											'<dl>'+
												'<dt>母婴用品</dt>'+
												'<dd>|奶粉|一段|奶粉|一段|奶粉|一段|奶粉|一段</dd>'+
											'</dl>'+
											'<div class="ll"><img src="images/navh4.jpg"/></div>'+
										'</div>'+
									'</li>'+
									'<li>'+
										'<h3>肉类海鲜</h3>'+
										'<p>牛肉&nbsp;&nbsp;羊肉&nbsp;&nbsp;海鲜&nbsp;&nbsp;鱼&nbsp;&nbsp;</p>'+
										'<div class="hh">'+
											'<dl>'+
												'<dt>母婴用品</dt>'+
												'<dd>|奶粉|一段|奶粉|一段|奶粉|一段|奶粉|一段</dd>'+
											'</dl>'+
											'<div class="ll"><img src="images/navh5.jpg"/></div>'+
										'</div>'+
									'</li>'+
									'<li>'+
										'<h3>肉类海鲜</h3>'+
										'<p>牛肉&nbsp;&nbsp;羊肉&nbsp;&nbsp;海鲜&nbsp;&nbsp;鱼&nbsp;&nbsp;</p>'+
										'<div class="hh">'+
											'<dl>'+
												'<dt>母婴用品</dt>'+
												'<dd>|奶粉|一段|奶粉|一段|奶粉|一段|奶粉|一段</dd>'+
											'</dl>'+
											'<div class="ll"><img src="images/navh6.jpg"/></div>'+
										'</div>'+
									'</li>'+
									'<li>'+
										'<h3>肉类海鲜</h3>'+
										'<p>牛肉&nbsp;&nbsp;羊肉&nbsp;&nbsp;海鲜&nbsp;&nbsp;鱼&nbsp;&nbsp;</p>'+
										'<div class="hh">'+
											'<dl>'+
												'<dt>母婴用品</dt>'+
												'<dd>|奶粉|一段|奶粉|一段|奶粉|一段|奶粉|一段</dd>'+
											'</dl>'+
											'<div class="ll"><img src="images/navh7.jpg"/></div>'+
										'</div>'+
									'</li>'+
									'<li>'+
										'<h3>肉类海鲜</h3>'+
										'<p>牛肉&nbsp;&nbsp;羊肉&nbsp;&nbsp;海鲜&nbsp;&nbsp;鱼&nbsp;&nbsp;</p>'+
										'<div class="hh">'+
											'<dl>'+
												'<dt>母婴用品</dt>'+
												'<dd>|奶粉|一段|奶粉|一段|奶粉|一段|奶粉|一段</dd>'+
											'</dl>'+
											'<div class="ll"><img src="images/navh8.jpg"/></div>'+
										'</div>'+
									'</li>'+
								'</ul>'+					
							'</div>'+					
					'</div>'),
			
			headY : template.compile('<div class="menu1">\
					<ul>\
						<li><a class="index">首页</a></li>\
	    				<li><a>优选生鲜</a></li>\
	    				<li><a>全球美食</a></li>\
	    				<li><a>优选厨房</a></li>\
	    				<li><a>新品尝鲜</a></li>\
	    				<li><a>优选国际</a></li>\
	    				<li><a>企业优先</a></li>\
	    				<li><a>会员频道</a></li>\
	    				<li><img src="images/index2.jpg" /></li>\
					</ul>\
				</div>\
				<span class="clear"></span>'),
			
			
		},
		
		bind : function(){
			//地区选择
			$('.topcity .chosecity span').on('click',function(){
					$('.nowcity').html($(this).html()).append('<b></b>');
			});
			//分类菜单
			$('.goodsfl ul li').mouseover(function(){
				$(this).find('.hh').show();
			}).mouseleave(function(){
				$(this).find('.hh').hide();
			});
		}
		
	};
			
})
