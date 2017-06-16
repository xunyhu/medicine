define(['jquery', 'template'], function($, template) {

	//一般情况下模块会返回一个对象，获取构造函数
	return {
		init: function() {
			this.bind();			
		},
		

		bind : function() {
				var data2 = {
					list : [
						{
							img : "images/floor1.jpg",
							left : {title : "水果&nbsp;&nbsp;蔬菜",img : "images/floor1-2.jpg"},
							cent : [{img : "images/floor1-1.jpg",title : "越南小青芒5斤",price:"￥118"},
									{img : "images/floor1-1.jpg",title : "越南小青芒5斤",price:"￥118"},
									{img : "images/floor1-1.jpg",title : "越南小青芒5斤",price:"￥118"},
									{img : "images/floor1-1.jpg",title : "越南小青芒5斤",price:"￥118"},
									{img : "images/floor1-1.jpg",title : "越南小青芒5斤",price:"￥118"},
									{img : "images/floor1-1.jpg",title : "越南小青芒5斤",price:"￥118"},
									{img : "images/floor1-1.jpg",title : "越南小青芒5斤",price:"￥118"},
									{img : "images/floor1-1.jpg",title : "越南小青芒5斤",price:"￥118"}
								   ],
							right : {
								list : ["奇异果","奇异果","奇异果","奇异果","奇异果","奇异果","奇异果","奇异果","奇异果"],
			        			img : "images/floor1-3.jpg"
							}
						},
						{
							img : "images/floor2.jpg",
							left : {title : "肉类&nbsp;&nbsp;海鲜",img : "images/floor2-1.jpg"},
							cent : [{img : "images/floor2-2.jpg",title : "蒙牛 精选羔羊肉片250g",price:"￥25.9"},
									{img : "images/floor2-2.jpg",title : "蒙牛 精选羔羊肉片250g",price:"￥25.9"},
									{img : "images/floor2-2.jpg",title : "蒙牛 精选羔羊肉片250g",price:"￥25.9"},
									{img : "images/floor2-2.jpg",title : "蒙牛 精选羔羊肉片250g",price:"￥25.9"},
									{img : "images/floor2-2.jpg",title : "蒙牛 精选羔羊肉片250g",price:"￥25.9"},
									{img : "images/floor2-2.jpg",title : "蒙牛 精选羔羊肉片250g",price:"￥25.9"},
									{img : "images/floor2-2.jpg",title : "蒙牛 精选羔羊肉片250g",price:"￥25.9"},
									{img : "images/floor2-2.jpg",title : "蒙牛 精选羔羊肉片250g",price:"￥25.9"}
								   ],
							right : {
								list : ["牛肉","牛肉","牛肉","牛肉","牛肉","牛肉","牛肉","牛肉","牛肉"],
			        			img : "images/floor2-3.jpg"
							}
						},
						{
							img : "images/floor3.jpg",
							left : {title : "奶类&nbsp;&nbsp;熟食",img : "images/floor3-1.jpg"},
							cent : [{img : "images/floor3-2.jpg",title : "拉丝奶酪320g",price:"￥28"},
									{img : "images/floor3-2.jpg",title : "拉丝奶酪320g",price:"￥28"},
									{img : "images/floor3-2.jpg",title : "拉丝奶酪320g",price:"￥28"},
									{img : "images/floor3-2.jpg",title : "拉丝奶酪320g",price:"￥28"},
									{img : "images/floor3-2.jpg",title : "拉丝奶酪320g",price:"￥28"},
									{img : "images/floor3-2.jpg",title : "拉丝奶酪320g",price:"￥28"},
									{img : "images/floor3-2.jpg",title : "拉丝奶酪320g",price:"￥28"},
									{img : "images/floor3-2.jpg",title : "拉丝奶酪320g",price:"￥28"}
								   ],
							right : {
								list : ["特仑苏","特仑苏","特仑苏","特仑苏","特仑苏","特仑苏","特仑苏","特仑苏","特仑苏"],
			        			img : "images/floor3-3.jpg"
							}
						},
						{
							img : "images/floor4.jpg",
							left : {title : "粮食&nbsp;&nbsp;干货",img : "images/floor4-1.jpg"},
							cent : [{img : "images/floor4-2.jpg",title : "特级初炸橄榄油1L",price:"￥59"},
									{img : "images/floor4-2.jpg",title : "特级初炸橄榄油1L",price:"￥59"},
									{img : "images/floor4-2.jpg",title : "特级初炸橄榄油1L",price:"￥59"},
									{img : "images/floor4-2.jpg",title : "特级初炸橄榄油1L",price:"￥59"},
									{img : "images/floor4-2.jpg",title : "特级初炸橄榄油1L",price:"￥59"},
									{img : "images/floor4-2.jpg",title : "特级初炸橄榄油1L",price:"￥59"},
									{img : "images/floor4-2.jpg",title : "特级初炸橄榄油1L",price:"￥59"},
									{img : "images/floor4-2.jpg",title : "特级初炸橄榄油1L",price:"￥59"}
								   ],
							right : {
								list : ["大米","大米","大米","大米","大米","大米","大米","大米","大米"],
			        			img : "images/floor4-3.jpg"
							}
						},
						{
							img : "images/floor5.jpg",
							left : {title : "休闲零食",img : "images/floor5-1.jpg"},
							cent : [{img : "images/floor5-2.jpg",title : "奥斯卡国王饼干",price:"￥19.9"},
									{img : "images/floor5-2.jpg",title : "奥斯卡国王饼干",price:"￥19.9"},
									{img : "images/floor5-2.jpg",title : "奥斯卡国王饼干",price:"￥19.9"},
									{img : "images/floor5-2.jpg",title : "奥斯卡国王饼干",price:"￥19.9"},
									{img : "images/floor5-2.jpg",title : "奥斯卡国王饼干",price:"￥19.9"},
									{img : "images/floor5-2.jpg",title : "奥斯卡国王饼干",price:"￥19.9"},
									{img : "images/floor5-2.jpg",title : "奥斯卡国王饼干",price:"￥19.9"},
									{img : "images/floor5-2.jpg",title : "奥斯卡国王饼干",price:"￥19.9"}
								   ],
							right : {
								list : ["糖果","糖果","糖果","糖果","糖果","糖果","糖果","糖果","糖果"],
			        			img : "images/floor5-3.jpg"
							}
						},
						{
							img : "images/floor6.jpg",
							left : {title : "牛奶&nbsp;&nbsp;茶饮",img : "images/floor6-1.jpg"},
							cent : [{img : "images/floor6-2.jpg",title : "德亚全脂纯牛奶250ml*24",price:"￥60"},
									{img : "images/floor6-2.jpg",title : "德亚全脂纯牛奶250ml*24",price:"￥60"},
									{img : "images/floor6-2.jpg",title : "德亚全脂纯牛奶250ml*24",price:"￥60"},
									{img : "images/floor6-2.jpg",title : "德亚全脂纯牛奶250ml*24",price:"￥60"},
									{img : "images/floor6-2.jpg",title : "德亚全脂纯牛奶250ml*24",price:"￥60"},
									{img : "images/floor6-2.jpg",title : "德亚全脂纯牛奶250ml*24",price:"￥60"},
									{img : "images/floor6-2.jpg",title : "德亚全脂纯牛奶250ml*24",price:"￥60"},
									{img : "images/floor6-2.jpg",title : "德亚全脂纯牛奶250ml*24",price:"￥60"}
								   ],
							right : {
								list : ["咖啡","咖啡","咖啡","咖啡","咖啡","咖啡","咖啡","咖啡","咖啡"],
			        			img : "images/floor6-3.jpg"
							}
						},
						{
							img : "images/floor7.jpg",
							left : {title : "酒水饮料",img : "images/floor7-1.jpg"},
							cent : [{img : "images/floor7-2.jpg",title : "小红帽干红葡萄酒250ml",price:"￥60"},
									{img : "images/floor7-2.jpg",title : "小红帽干红葡萄酒250ml",price:"￥60"},
									{img : "images/floor7-2.jpg",title : "小红帽干红葡萄酒250ml",price:"￥60"},
									{img : "images/floor7-2.jpg",title : "小红帽干红葡萄酒250ml",price:"￥60"},
									{img : "images/floor7-2.jpg",title : "小红帽干红葡萄酒250ml",price:"￥60"},
									{img : "images/floor7-2.jpg",title : "小红帽干红葡萄酒250ml",price:"￥60"},
									{img : "images/floor7-2.jpg",title : "小红帽干红葡萄酒250ml",price:"￥60"},
									{img : "images/floor7-2.jpg",title : "小红帽干红葡萄酒250ml",price:"￥60"}
								   ],
							right : {
								list : ["瓦伦丁","瓦伦丁","瓦伦丁","瓦伦丁","瓦伦丁","瓦伦丁","瓦伦丁","瓦伦丁","瓦伦丁"],
			        			img : "images/floor7-3.jpg"
							}
						}
						
					]
				};
				var str = '<div class="floor">'+
							'{{each list as value j}}'+
							'<div class="floortop"><img src="{{value.img}}"/></div>'+
							'<div class="floorcentent">'+
								'<div class="flocentleft">'+
									'<h3>{{value.left.title}}</h3>'+
									'<img src="{{value.left.img}}"/>'+
								'</div>'+
								'<div class="flocentcent">'+
									'{{each value.cent as itm i}}'+
									'<dl class="dll">'+
										'<dt><img src="{{itm.img}}"/></dt>'+
										'<dd>'+
											'<p>{{itm.title}}</p>'+
											'<p class="price">{{itm.price}}</p>'+
										'</dd>'+
									'</dl>'+
									'{{/each}}'+
								'</div>'+
								'<div class="flocentright">'+
									'<ul>'+
										'{{each value.right.list as val}}'+
										'<li>{{val}}</li>'+
										'{{/each}}'+
									'</ul>'+
									'<img src="{{value.right.img}}"/>'+
								'</div>'+
								'</div>'+
								'{{/each}}'+
						'</div>';
				var list = template.compile(str);
				var html = list(data2);
				$('#floor').append(html);
		}
		
			
		
	}
})