$(function(){
	
	$.ajax({
		type:"post",
		url:"http://localhost/sfbest/data/listdemo.php",
		async:true,
		data : {
			page : 1,
		},
		success : function(res){
			//console.log(res);
			var res = JSON.parse(res);
			//console.log(res)
			$(res).each(function(idx,item){
				$('<li/>').addClass('data').html('<a href="#" class="img"><img src="'+ item.img +'" alt=""></a><p class="p1"><a href="#">'+ item.name +'</a><span class="_discount">'+"原价￥"+ item.discount +'</span></p><p><a href="#">'+ item.msg +'</a></p><p><strong>'+"现价￥"+ item.price +'</strong></p><p class="shop">加入购物车</p>').appendTo($('.list ul'));
				
			});
		}
	});
	
	//点击分页请求不同的商品
	$('.page span').bind('click',function(){
		$('ul').empty();
		$(this).addClass('active').siblings().removeClass('active');
		$.ajax({
			type:"post",
			url:"http://localhost/sfbest/data/listdemo.php",
			async:true,
			data : {
				page : $(this).html(),
			},
			success : function(res){
				var res = JSON.parse(res);
				$(res).each(function(idx,item){
					$('<li/>').addClass('data').html('<a href="#" class="img"><img src="'+ item.img +'" alt=""></a><p class="p1"><a href="#">'+ item.name +'</a><span class="_discount">'+"原价￥"+ item.discount +'</span></p><p><a href="#">'+ item.msg +'</a></p><p><strong>'+"现价￥"+ item.price +'</strong></p><p class="shop">加入购物车</p>').appendTo($('.list ul'));				
				});
			}
		});
	});
	
	//飞入购物车
	var $list=$('.list');
	$(document).ajaxComplete(function(){	
		$('.list').on('click','.shop',function(e){
			var $img=$('<img src="1" class="flyimg"/>');
			var $li=$(this).parent();

			$li.append($img);
			var $offsetImg=$img.offset();
			var $offsetNum=$('#num').offset();
			
			$img.hide();
			$img.attr('src',$(this).siblings('a').children().attr('src'))
			
		})
	})
	
})
