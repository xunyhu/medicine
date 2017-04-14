define(['jquery','temp','carousel'],function($,temp,carousel){
	
	return {
		init : function(){
			 var  data = {
							list : [{
				            		title : '1F常用药品分类',
				                    ul : ["关节炎","关节炎","关节炎","关节炎","关节炎","关节炎","关节炎","关节炎","关节炎",
				                          "关节炎","关节炎","关节炎","关节炎","关节炎","关节炎","关节炎"],
				                    right : ['images/floor1-4.jpg','images/floor1-5.jpg'],
				                    bottom :  [{img : "images/floor1-10.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                               {img : "images/floor1-9.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                               {img : "images/floor1-8.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                                {img : "images/floor1-7.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                                {img : "images/floor1-6.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                              ]
				            	    },
				                    {
				                    title : '2F专科用药',
				                    ul :  ["银屑病","银屑病","银屑病","银屑病","银屑病","银屑病","银屑病","银屑病","银屑病",
				                          "银屑病","银屑病","银屑病","银屑病","银屑病","银屑病","银屑病"],
				                    right : ['images/floor2-4.jpg','images/floor2-5.jpg'],
				                    bottom :   [{img : "images/floor2-6.jpg",title : "【长效伟哥】希爱力",price:"399"},
				                               {img : "images/floor2-7.jpg",title : "【前列腺炎】前列舒通胶囊",price:"88.8"},
				                               {img : "images/floor2-8.jpg",title : "【精分】欧兰宁",price:"102"},
				                                {img : "images/floor2-9.jpg",title : "【牛皮癣】达力士",price:"68.9"},
				                                {img : "images/floor2-10.jpg",title : "【肺癌】特罗凯",price:"4280"},
				                              ]
				                    },
				                    {
				                    title : '3F医疗器械',
				                    ul :  ["血压计","血压计","血压计","血压计","血压计","血压计","血压计","血压计","血压计",
				                          "血压计","血压计","血压计","血压计","血压计","血压计","血压计"],
				                    right : ['images/floor3-4.jpg','images/floor3-5.jpg'],
				                    bottom :   [{img : "images/floor3-7.jpg",title : "鱼跃 上臂式家用电子血压计",price:"149.0"},
				                               {img : "images/floor3-8.jpg",title : "欧姆龙 智能上臂式电子",price:"239.0"},
				                               {img : "images/floor3-6.jpg",title : "强生 稳豪型血糖试纸",price:"159.0"},
				                                {img : "images/floor3-9.jpg",title : "诺斯清 生理海水鼻腔护",price:"360.5"},
				                                {img : "images/floor3-10.jpg",title : "鱼跃 制氧机7F-3CW | 升",price:"115.0"},
				                              ]
				                    },
				                    {
				                    title : '4F隐形眼镜',
				                    ul :  ["日抛","月抛","季抛","半年抛","日抛","月抛","季抛","半年抛",
				                          "日抛","月抛","季抛","半年抛","日抛","月抛","季抛","半年抛"],
				                    right : ['images/floor4-3.jpg','images/floor4-4.jpg'],
				                    bottom :   [{img : "images/floor4-5.jpg",title : "博士伦 清朗水润高清日抛 30",price:"158.8"},
				                               {img : "images/floor4-6.jpg",title : "强生 舒日日抛 30片装",price:"138.0"},
				                               {img : "images/floor4-7.jpg",title : "库博 佰视明月抛 3片装",price:"28.0"},
				                                {img : "images/floor4-8.jpg",title : "海昌 H2O月抛 6片装",price:"38.0"},
				                                {img : "images/floor4-9.jpg",title : "【热销款】博士伦 润明清透2",price:"48.0"},
				                              ]
				                    },
				                    {
				            		title : '5F滋补保健',
				                    ul : ["补肾壮阳","补肾壮阳","补肾壮阳","补肾壮阳","补肾壮阳","补肾壮阳","补肾壮阳","补肾壮阳","补肾壮阳",
				                          "补肾壮阳","补肾壮阳","补肾壮阳","补肾壮阳","补肾壮阳","补肾壮阳","补肾壮阳"],
				                    right : ['images/floor5-3.jpg','images/floor5-4.jpg'],
				                    bottom :  [{img : "images/floor5-5.jpg",title : "汤臣倍键蛋白粉",price:"29.9"},
				                               {img : "images/floor5-6.jpg",title : "汤臣倍键蛋白粉",price:"29.9"},
				                               {img : "images/floor5-7.jpg",title : "汤臣倍键蛋白粉",price:"29.9"},
				                                {img : "images/floor5-8.jpg",title : "汤臣倍键蛋白粉",price:"29.9"},
				                                {img : "images/floor5-9.jpg",title : "汤臣倍键蛋白粉",price:"29.9"},
				                              ]
				            	    },
				                    {
				                    title : '6F维生素钙',
				                    ul :  ["维生素A","维生素A","维生素A","维生素A","维生素A","维生素A","维生素A","维生素A","维生素A",
				                          "维生素A","维生素A","维生素A","维生素A","维生素A","维生素A","维生素A"],
				                    right : ['images/floor6-4.jpg','images/floor6-5.jpg'],
				                    bottom :   [{img : "images/floor6-6.jpg",title : "【备孕】爱乐维 复合维生素",price:"69.0"},
				                               {img : "images/floor6-6.jpg",title : "【备孕】爱乐维 复合维生素",price:"69.0"},
				                               {img : "images/floor6-6.jpg",title : "【备孕】爱乐维 复合维生素",price:"69.0"},
				                                {img : "images/floor6-6.jpg",title : "【备孕】爱乐维 复合维生素",price:"69.0"},
				                                {img : "images/floor6-6.jpg",title : "【备孕】爱乐维 复合维生素",price:"69.0"},
				                              ]
				                    },
				                    {
				                    title : '7F医疗器械',
				                    ul :  ["血压计","血压计","血压计","血压计","血压计","血压计","血压计","血压计","血压计",
				                          "血压计","血压计","血压计","血压计","血压计","血压计","血压计"],
				                    right : ['images/floor7-4.jpg','images/floor7-4.jpg'],
				                    bottom :   [{img : "images/floor7-5.jpg",title : "【4支家庭装】云南白药牙膏",price:"89"},
				                               {img : "images/floor7-5.jpg",title : "【4支家庭装】云南白药牙膏",price:"89"},
				                               {img : "images/floor7-5.jpg",title : "【4支家庭装】云南白药牙膏",price:"89"},
				                                {img : "images/floor7-5.jpg",title : "【4支家庭装】云南白药牙膏",price:"89"},
				                                {img : "images/floor7-5.jpg",title : "【4支家庭装】云南白药牙膏",price:"89"},
				                              ]
				                    },
				                    {
				                    title : '8F情趣用品',
				                    ul :  ["避孕套","避孕套","避孕套","避孕套","避孕套","避孕套","避孕套","避孕套",
				                         "避孕套","避孕套","避孕套","避孕套","避孕套","避孕套","避孕套","避孕套"],
				                    right : ['images/floor8-3.jpg','images/floor8-3.jpg'],
				                    bottom :   [{img : "images/floor8-4.jpg",title : "杜蕾斯避孕套52片组合装 ",price:"69.0"},
				                               {img : "images/floor8-4.jpg",title : "杜蕾斯避孕套52片组合装 ",price:"69.0"},
				                               {img : "images/floor8-4.jpg",title : "杜蕾斯避孕套52片组合装 ",price:"69.0"},
				                                {img : "images/floor8-4.jpg",title : "杜蕾斯避孕套52片组合装 ",price:"69.0"},
				                                {img : "images/floor8-4.jpg",title : "杜蕾斯避孕套52片组合装 ",price:"69.0"},
				                              ]
				                    },
				                    {
				                    title : '9F母婴用品',
				                    ul :  ["进口奶粉","进口奶粉","进口奶粉","进口奶粉","进口奶粉","进口奶粉","进口奶粉","进口奶粉",
				                         "进口奶粉","进口奶粉","进口奶粉","进口奶粉","进口奶粉","进口奶粉","进口奶粉","进口奶粉"],
				                    right : ['images/floor9-3.jpg','images/floor9-3.jpg'],
				                    bottom :   [{img : "images/floor9-4.jpg",title : "宝宝金水360ml",price:"48.0"},
				                               {img : "images/floor9-4.jpg",title : "宝宝金水360ml",price:"48.0"},
				                               {img : "images/floor9-4.jpg",title : "宝宝金水360ml",price:"48.0"},
				                                {img : "images/floor9-4.jpg",title : "宝宝金水360ml",price:"48.0"},
				                                {img : "images/floor9-4.jpg",title : "宝宝金水360ml",price:"48.0"},
				                              ]
				                    }
				                ]
						}

			var str = 	'{{each list as value j}}\
						        <div class="floor">\
						        	<div class="frleft fl">\
						        		<h4>{{value.title}}</h4>\
						        		<div class="frbottom">\
						                    <ul>\
						                    {{each value.ul as itm i}}\
						                        <li>{{itm}}</li>\
						                    {{/each}}\
						                    </ul>\
						                </div>     		\
						        	</div>\
						            <div class="frright fr">\
						                <div class="lunbtu"></div>\
						                <div class="lunbtur">\
						                    {{each value.right as val}}\
						                    <img src="{{val}}"/>\
						                    {{/each}}\
						                </div>\
						                <div class="lunbtub">\
						                    <ul>\
						                    {{each value.bottom as val}}\
						                        <li>\
						                            <img src="{{val.img}}" >\
						                            <p>{{val.title}}</p>\
						                            <p><span>￥</span>{{val.price}}</p>\
						                        </li>\
						                    {{/each}}\
						                    </ul>\
						                </div>\
						            </div>\
						        </div>\
						        {{/each}}'

			var list = temp.compile(str);
			var html = list(data);
			$('#wrap-floor').append(html);


			//图片淡入淡出
			$('.lunbtur').on('mouseover','img',function(){
				$(this).css({'opacity':'.9'});
			}).on('mouseleave','img',function(){
				$(this).css({'opacity':'1'});
			});
			$('.lunbtub').on('mouseover','img',function(){
				$(this).css({'opacity':'.6'});
			}).on('mouseleave','img',function(){
				$(this).css({'opacity':'1'});
			});




			// var $a = $('#wrap-floor').find('.floor');
			// console.log(carousel);
			//console.log(a);
			// $a.each(function(idx,ele){
			// 	ele.carousel({
			// 		imglist : ['images/floor1-1.jpg','images/floor1-2.jpg','images/floor1-3.jpg'],
			// 		width : 605,
			// 		height : 284
			// 	})
			// })
		}
	}

})