requirejs(['config'],function(){
	require(['jquery'],function($){
		$('header').load('http://localhost:3000/medicine/html/head.html');
		$('footer').load('http://localhost:3000/medicine/html/foot.html');

		$(function(){
			$.ajax({
				type : 'get',
				url : 'http://localhost:3000/medicine/api/getlist.php',
				data : {page:1},
				async : true,
				success : function(res){
					var res = JSON.parse(res);
					var $ul = $('.concent-bottom ul');
					// console.log(res)
					$(res).each(function(idx,ele){
						$('<li\>').html('<p class="combo"><a href="" class="teshu">1件</a><a href="">套餐1</a><a href="">套餐2</a><i></i></p>\
										<img src="' + ele.img + '" alt="">\
										<p class="price">' + ele.price +'</p>\
										<p class="type"><span>' + ele.type + '</span>'+ ele.description +'</p>\
										<p class="comment">1药网自营<span fr>评论<em>'+ ele.commen +'</em>条</span></p>\
										<div>\
											<input type="button" value="-" class="cut">\
											<input type="text" value="1" class="vue">\
											<input type="button" value="+" class="add">\
											<a href="">加入购物车</a>\
										</div>').appendTo($ul);
					});

					//console.log($('.type').children())
					var $type = $('.type').children();
					$type.each(function(idx,ele){
						if (ele.innerText == "商家") {
							$(this).css({'background':"#69d283"})
						}
					});
				}
			});


			//点击分页切换数据
			$('.page span').on('click',function(){
				var $num = $(this).text();
				//console.log($num);
				$(this).addClass('active').siblings().removeClass('active');
				$('.concent-bottom ul').empty();
				$.get('http://localhost:3000/medicine/api/getlist.php',{page:$num},function(res){
					var res = JSON.parse(res);
					var $ul = $('.concent-bottom ul');
					$(res).each(function(idx,ele){
						$('<li\>').html('<p class="combo"><a href="" class="teshu">1件</a><a href="">套餐1</a><a href="">套餐2</a><i></i></p>\
										<img src="' + ele.img + '" alt="">\
										<p class="price">' + ele.price +'</p>\
										<p class="type"><span>' + ele.type + '</span>'+ ele.description +'</p>\
										<p class="comment">1药网自营<span fr>评论<em>'+ ele.commen +'</em>条</span></p>\
										<div>\
											<input type="button" value="-" class="cut">\
											<input type="text" value="1" class="vue">\
											<input type="button" value="+" class="add">\
											<a href="">加入购物车</a>\
										</div>').appendTo($ul);
					});
					var $type = $('.type').children();
					$type.each(function(idx,ele){
						if (ele.innerText == "商家") {
							$(this).css({'background':"#69d283"})
						}
					});
				})
			})

		})
	})
})