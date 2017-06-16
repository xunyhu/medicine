//定义模块
define(['jquery', 'template'], function($, template) {

	//一般情况下模块会返回一个对象，获取构造函数
	return {
		init: function() {
			$('.toppromo').append( this.tempate.topImg() );
			this.bind();
			
		},
		tempate: {
		topImg: template.compile('<div class="banner"></div>\
						   <span class="topclose">关闭</span>\
								</div>')
		},
		bind :function(){
			$('.topclose').click(function(){
					$(this).parent().slideUp();
			});
//			//地区选择
//			$('.topcity .chosecity span').on('click',function(){
//					$('.nowcity').html($(this).html()).append('<b></b>');
//			});
		}

	};
})

