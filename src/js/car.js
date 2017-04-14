require(['config'],function(){
	require(['jquery'],function($){
		$.post('../api/usename.php', function(res) {
				var $obj = eval('(' + res + ')');
				if($obj.state) {
					$('.nh').html('欢迎您,' + $obj.nowUser + '<a class="logoutA" href="">退出</a>');
					$('.dd').text(' ');
					$('.cc').text(' ');
				}

				$('.logoutA').on('click', function() {
					$.post('../api/quit.php', function(res) {
						location.href = "login.html";
					})
				});
		});

		var id = location.search.slice(1).split('=')[1];
		//console.log(id);
		$.get('../api/getgoods.php',{"userid":id},function(response){
			console.log(response);
			$('.car').html('<ul>'+
								'<li class="lione">我的购物车</li>'+
								'<li>需求清单</li>'+
							'</ul>'+
							'<table>'+
								'<thead>'+
									'<tr class="thf">'+
										'<th class="one"><input type="checkbox" id="all">全选</th>'+
										'<th class="two">商品信息</th>'+
										'<th class="three">单价</th>'+
										'<th class="four">数量</th>'+
										'<th class="five">重量</th>'+
										'<th class="six">小计</th>'+
										'<th class="seven">状态</th>'+
										'<th class="ba">操作</th>'+
									'</tr>'+
								'</thead>'+
								'<tbody id="carmain">'+									
								'</tbody>'+
							'</table>'+
							'<div class="operation">'+
								'<ul>'+
									'<li>重量合计<br><span>0.00kg</span></li>'+
									'<li>运费<br><span>￥0.00</span></li>'+
									'<li>优惠<br><span>￥0.00</span></li>'+
									'<li>商品金额<br><span>￥0.00</span></li>'+
								'</ul>'+
							'</div>'+
							'<div class="jiesuan">'+
								'<ul>'+
									'<li>'+
										'<input type="checkbox">全选'+
									'</li>'+
									'<li>删除</li>'+
									'<li>清空购物车</li>'+
									'<li>商品总重：0.0kg</li>'+
									'<li>运费：￥0.00</li>'+
									'<li>商品总价：<span class="price ss"></span></li>'+
									'<li><a href="list.html">继续购物</a></li>'+
									'<li><a href="">去结算</a></li>'+
								'</ul>'+
							'</div>');
			// $('.car').html('<ul>\
			// 					<li class="lione">我的购物车</li>\
			// 					<li>需求清单</li>\
			// 				</ul>\
			// 				<table>\
			// 					<thead>\
			// 						<tr class="thf">\
			// 							<th class="one"><input type="checkbox" id="all">全选</th>\
			// 							<th class="two">商品信息</th>\
			// 							<th class="three">单价</th>\
			// 							<th class="four">数量</th>\
			// 							<th class="five">重量</th>\
			// 							<th class="six">小计</th>\
			// 							<th class="seven">状态</th>\
			// 							<th class="ba">操作</th>\
			// 						</tr>\
			// 					</thead>\
			// 					<tbody id="carmain">\									
			// 					</tbody>\
			// 				</table>\
			// 				<div class="operation">\
			// 					<ul>\
			// 						<li>重量合计<br><span>0.00kg</span></li>\
			// 						<li>运费<br><span>￥0.00</span></li>\
			// 						<li>优惠<br><span>￥0.00</span></li>\
			// 						<li>商品金额<br><span>￥0.00</span></li>\
			// 					</ul>\
			// 				</div>\
			// 				<div class="jiesuan">\
			// 					<ul>\
			// 						<li>\
			// 							<input type="checkbox">全选\
			// 						</li>\
			// 						<li>删除</li>\
			// 						<li>清空购物车</li>\
			// 						<li>商品总重：0.0kg</li>\
			// 						<li>运费：￥0.00</li>\
			// 						<li>商品总价：<span class="price ss"></span></li>\
			// 						<li><a href="list.html">继续购物</a></li>\
			// 						<li><a href="">去结算</a></li>\
			// 					</ul>\
			// 				</div>');

			// $('#carmain').html('<tr>\
			// 						<td class="one"><input type="checkbox" ></td>\
			// 						<td class="second two">\
			// 							<img src="'+  +'" style="width:60px;height:60px" />\
			// 							<span>来益 维生素E软胶囊 60粒</span>\
			// 						</td>\
			// 						<td class="price three">29.9</td>\
			// 						<td class="four">\
			// 							<a class="cut">-</a><input class="amount" value="0" /><a class="add">+</a>\
			// 						</td>\
			// 						<td class="five">0.02kg</td>\
			// 						<td class="price six ss"></td>\
			// 						<td class="seven">有货</td>\
			// 						<td class="ba">收藏   <span class="delete">删除</span></td>\
			// 					</tr>')
			//console.log(response);
			$(response).each(function(idx,ele){
				$('<tr\>').html('<td class="one"><input type="checkbox" ></td>\
								<td class="second two">\
									<img src="'+ ele.goodsImg +'" style="width:60px;height:60px" />\
									<span>'+ ele.goodsName +'</span>\
								</td>\
								<td class="price three">'+ ele.goodsPrice +'</td>\
								<td class="four">\
									<a class="cut">-</a><input class="amount" value="1" /><a class="add">+</a>\
								</td>\
								<td class="five">0.02kg</td>\
								<td class="price six ss"></td>\
								<td class="seven">有货</td>\
								<td class="ba">收藏   <span class="delete">删除</span></td>').appendTo('#carmain')
			});

			//小计
			//$()
			//全选反选
			//计算总价
			//删除

		},'json')
	});
})