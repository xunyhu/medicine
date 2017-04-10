requirejs(['config'],function(){
	require(['jquery'],function($){
		$('header').load('http://localhost:3000/medicine/html/head.html',function(){
			
			$.post('../api/usename.php', function(res) {
				var $obj = eval('(' + res + ')');
				if($obj.state) {
					$('.first').html('欢迎您,' + $obj.nowUser + '<a class="logoutA" href="">退出</a>');
					$('.second').text(' ');
				}


				$('.logoutA').on('click', function() {
					$.post('../api/quit.php', function(res) {
						window.location.reload();
					})
				});
			});

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
										<a href="http://localhost:3000/medicine/html/details.html?goodsid='+ ele.id +'"><img src="' + ele.img + '" alt=""></a>\
										<p class="price">' + ele.price +'</p>\
										<p class="type"><span>' + ele.type + '</span>'+ ele.description +'</p>\
										<p class="comment">1药网自营<span fr>评论<em>'+ ele.commen +'</em>条</span></p>\
										<div>\
											<input type="button" value="-" class="cut">\
											<input type="text" value="1" class="vue">\
											<input type="button" value="+" class="add">\
											<a href="" class="addcar" data-goodid="'+ ele.id +'">加入购物车</a>\
										</div>').appendTo($ul);
					});

					//console.log($('.type').children())
					var $type = $('.type').children();
					$type.each(function(idx,ele){
						if (ele.innerText == "商家") {
							$(this).css({'background':"#69d283"})
						}
					});


					var $add = $(".addcar");
					var userid;
					var goodid;
					$add.on("click",function(){
						userid = location.search.slice(1).split("=")[1];
						goodid = $(this).data("goodid");
						$.post('../api/addcar.php',{"user":userid,"goodsid":goodid},function(response){
							 if (response == "success"){
                                //alert("加入购物车成功!");
                             } else {
                                alert("加入购物车失败!");
                             }
						});

						//商品数量增加
						// console.log($('.cart_num')[1].innerText);
						// $('.cart_num')[1].innerText += 1;

						return false;
					});


				}
			});




		});
		$('footer').load('http://localhost:3000/medicine/html/foot.html');



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
									<a href="http://localhost:3000/medicine/html/details.html?goodsid='+ ele.id +'"><img src="' + ele.img + '" alt=""></a>\
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
			});
		});


	});
})