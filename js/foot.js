define(['jquery','template'],function($,template){
	
	return {
		init : function() {
			$('#foot').append(this.template.foot());
		},
		
		template : {
			foot : template.compile('<div id="footer">\
									<div class="foot">\
										<ul>\
											<li><img src="images/cd.jpg"/></li>\
											<li><img src="images/qc.jpg"/></li>\
											<li><img src="images/sf.jpg"/></li>\
											<li><img src="images/qq.jpg"/></li>\
										</ul>\
									</div>\
									<div class="footmiddle">\
										<div class="footmiddle-1">\
											<dl>\
												<dt><img src="images/logo.jpg"/></dt>\
												<dd class="kefu">9533858</dd>\
												<dd>周一至周日8:30-22:00</dd>\
											</dl>\
										</div>\
										<div class="footmiddle-2">\
											<ul>\
									          <li class="title">购物指南</li>\
									          <li><a >积分制度</a></li>\
									          <li><a >会员介绍</a></li>\
									          <li><a >购物流程</a></li>\
									          <li><a>常见问题</a></li>\
									        </ul>\
									        <ul>\
									          <li class="title">配送服务</li>\
									          <li><a>配送政策</a></li>\
									          <li><a>开箱验货</a></li>\
									          <li><a>配送运费</a></li>\
									          <li><a>配送范围</a></li>\
									        </ul>\
									        <ul>\
									          <li class="title">支付方式</li>\
									          <li><a>货到付款</a></li>\
									          <li><a>在线支付</a></li>\
									          <li><a>优选卡</a></li>\
									          <li><a>发票制度</a></li>\
									        </ul>\
									        <ul>\
									          <li class="title">售后服务</li>\
									          <li><a>退款说明</a></li>\
									          <li><a>退换货流程</a></li>\
									          <li><a>退换货政策</a></li>\
									          <li><a>隐私条款</a></li>\
									        </ul>\
									        <ul>\
												<li class="title">商家中心</li>\
												<li><a>商家规则</a></li>\
												<li><a>食品安全规范</a></li>\
											</ul>\
										</div>\
										<div class="footmiddle-3">\
											<dl>\
												<dt><a>手机客户端</a></dt>\
												<dd></dd>\
											</dl>\
											<dl>\
												<dt><a>官方微信</a></dt>\
												<dd></dd>\
											</dl>\
										</div>\
										<div class="footbttom">\
											<div class="footbttom1">\
												<img src="images/bottom_sm.png" />\
												<img src="images/kxicon.jpg" />\
											</div>\
											<div class="footbttom2">\
												<p>\
													<span><a>关于我们</a></span>\
													<span><a>联系我们</a></span>\
													<span><a>招聘人才</a></span>\
													<span><a>友情链接</a></span>\
													<span><a>供应商申请</a></span>\
													<span>Copyright© 顺丰优选 sfbest.com 版权所有</span>\
												</p>\
												<p>\
													<span>京公网安备11010502026831号</span>\
													<span><a>京ICP证150325号</a></span>\
													<span><a>食品经营许可证JY11113080533669号</a></span>\
													<span><a>企业营业执照</a></span>\
												</p>\
											</div>\
										</div>\
									</div>\
								</div>')
		}
		
	}
	
})