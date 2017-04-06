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
				                    bottom :   [{img : "images/floor1-10.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                               {img : "images/floor1-9.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                               {img : "images/floor1-8.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                                {img : "images/floor1-7.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                                {img : "images/floor1-6.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                              ]
				                    },
				                    {
				                    title : '3F医疗器械',
				                    ul :  ["血压计","血压计","血压计","血压计","血压计","血压计","血压计","血压计","血压计",
				                          "血压计","血压计","血压计","血压计","血压计","血压计","血压计"],
				                    right : ['images/floor3-4.jpg','images/floor3-5.jpg'],
				                    bottom :   [{img : "images/floor1-10.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                               {img : "images/floor1-9.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                               {img : "images/floor1-8.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                                {img : "images/floor1-7.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                                {img : "images/floor1-6.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                              ]
				                    },
				                    {
				                    title : '4F隐形眼镜',
				                    ul :  ["日抛","月抛","季抛","半年抛","日抛","月抛","季抛","半年抛",
				                          "日抛","月抛","季抛","半年抛","日抛","月抛","季抛","半年抛"],
				                    right : ['images/floor4-3.jpg','images/floor4-4.jpg'],
				                    bottom :   [{img : "images/floor1-10.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                               {img : "images/floor1-9.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                               {img : "images/floor1-8.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                                {img : "images/floor1-7.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                                {img : "images/floor1-6.jpg",title : "干枯草菌颗粒",price:"88.8"},
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
				                    bottom :   [{img : "images/floor1-10.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                               {img : "images/floor1-9.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                               {img : "images/floor1-8.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                                {img : "images/floor1-7.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                                {img : "images/floor1-6.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                              ]
				                    },
				                    {
				                    title : '7F医疗器械',
				                    ul :  ["血压计","血压计","血压计","血压计","血压计","血压计","血压计","血压计","血压计",
				                          "血压计","血压计","血压计","血压计","血压计","血压计","血压计"],
				                    right : ['images/floor3-4.jpg','images/floor3-5.jpg'],
				                    bottom :   [{img : "images/floor1-10.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                               {img : "images/floor1-9.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                               {img : "images/floor1-8.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                                {img : "images/floor1-7.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                                {img : "images/floor1-6.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                              ]
				                    },
				                    {
				                    title : '8F隐形眼镜',
				                    ul :  ["日抛","月抛","季抛","半年抛","日抛","月抛","季抛","半年抛",
				                          "日抛","月抛","季抛","半年抛","日抛","月抛","季抛","半年抛"],
				                    right : ['images/floor4-3.jpg','images/floor4-4.jpg'],
				                    bottom :   [{img : "images/floor1-10.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                               {img : "images/floor1-9.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                               {img : "images/floor1-8.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                                {img : "images/floor1-7.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                                {img : "images/floor1-6.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                              ]
				                    },
				                    {
				                    title : '9F隐形眼镜',
				                    ul :  ["日抛","月抛","季抛","半年抛","日抛","月抛","季抛","半年抛",
				                          "日抛","月抛","季抛","半年抛","日抛","月抛","季抛","半年抛"],
				                    right : ['images/floor4-3.jpg','images/floor4-4.jpg'],
				                    bottom :   [{img : "images/floor1-10.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                               {img : "images/floor1-9.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                               {img : "images/floor1-8.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                                {img : "images/floor1-7.jpg",title : "干枯草菌颗粒",price:"88.8"},
				                                {img : "images/floor1-6.jpg",title : "干枯草菌颗粒",price:"88.8"},
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