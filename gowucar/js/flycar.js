$(document).ready(function(){
	$("#sideLast").click(function(){
		$('html,body').animate({scrollTop:'0px'},800)
	})
	//回到顶部
	var $clieh = $(window).height();
	$(document).scroll(function(){
		var $scoll = $(document).scrollTop();
		if ($scoll > $clieh) {
			
			$("#sideLast").show();
		} else {
			$("#sideLast").hide();
		}
	})
	
	//添加购物车飞入效果
	var $carNum = 0;
	$('.addcat').click(function(event){
		var $offset = $("#cart").offset();
		var $addcat = $(this);
		var $img = $addcat.parent().find('img').attr('src');
		//创建小图节点
		var $flyer = $('<img class="u-flyer" src="'+$img+'">');
		$flyer.fly({
			start: {
				left: event.pageX,
				top: event.pageY
			},
			end: {
				left: $offset.left+10,
				top: $offset.top+10,
				width: 0,
				height: 0
			},
		});
		//购买商品数量
		$carNum += 1;
		$("#msg").show().html($carNum)
		//将商品加入到购物车列表
		
	})
	
	//购物车图片hovr显示隐藏
	$("#cart").mouseover(function(){
		$(this).find(".msglist").show(400)
	}).mouseout(function(){
		$(this).find(".msglist").delay(1000).hide(400)
	})
	
})