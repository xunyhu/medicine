define(['top','head','foot','template','jquery'],function(top,head,foot,template,$){
	return {
		init : function() {
			top.init();
			head.init();
			foot.init();
			$('.wrap-head').append( this.template.carhead() );
			this.bind();
		},
		
		template : {
			carhead : template.compile('<div class="head-top">'+
											'<ul>'+
												'<li>'+
													'<a href="../index.html" class="logoleft"></a>'+
													'<a href="../index.html" class="logoright"></a>'+					
													'<a href="../index.html" class="logotext"></a>'+						
												'</li>'+
												'<li><img src="images/step_01.jpg" class="buystep"/></li>'+
											'</ul>'+
										'</div>'+
										'<div class="head-bom">'+
											'<ul>'+
												'<li><h2>我的购物车</h2></li>'+
												'<li>'+
													'<h4>送至：</h4>'+
													'<span>广东省广州市天河区</span>'+
												'</li>'+
												'<li>提示：请选择您的收货区域，查看更准确的信息</li>'+
											'</ul>'+
										'</div>')
		},
		
		
		bind : function() {
			//计算总价
//			var $zPrice = $('#price').html();
			//$('#total').html($zPrice)
			
			var a = $('tbody tr .amount');
			a.each(function(idx,value){
				$(value).val(1);
			})
			var prc = $('.price');
			a.each(function(i,d){
				var  $a = parseFloat(d.value);//19.9
				if ($a == 1) {
					$(this).parent().parent().find('.price').html($(this).parent().parent().find('.univalence').text())
				}
			});
			//点击数量时计算每一个商品的总价			//单价  *  数量
			var cut = $('tbody .cut');
			cut.each(function(i,idx){
				idx.onclick = function() {
					var $h = parseInt($(this).parent().find('.amount').val());
					var $len = $(this).parent().parent().find('.univalence').text().length;
					var $univalence = $(this).parent().parent().find('.univalence').text().substring(1,$len);					
					if ($h > 1) {
						$h -= 1;
						$(this).parent().find('.amount').val($h);
						
						//计算总价
						var $z = $(this).parent().find('.amount').val() * $univalence;
						var $zj = "￥" + toDecimal($z);
						$(this).parent().parent().find('.price').html($zj);
					}
					chechNum();
				}
			});
			var add = $('tbody .add');
			add.each(function(i,idx){
				idx.onclick = function() {					
					var $h = parseInt($(this).parent().find('.amount').val());
					var $len = $(this).parent().parent().find('.univalence').text().length;
					var $univalence = $(this).parent().parent().find('.univalence').text().substring(1,$len);	
					if ($h>=0) {
						$h += 1;
						$(this).parent().find('.amount').val($h);
						
						//计算总价
						var $z = $(this).parent().find('.amount').val() * $univalence;
						var $zj = "￥" + toDecimal($z);
						$(this).parent().parent().find('.price').html($zj);
					}
					chechNum();
				}
			});
			
			function toDecimal(x) { //取小数点后两位
		      if (isNaN(parseFloat(x))) { 
		        return; 
		      } 
		      x = Math.round(x*100)/100; 
		      return x; 
		    }; 
					
			
			//全选全不选
			var $check = $('tbody :checkbox');
			var $tr = $('tbody tr');
			$('#all').click(function(){
				$check.prop('checked',this.checked);
				var $m = this.checked ? 'addClass' : 'removeClass';
				$tr[$m]("selected");
				chechNum();
			});
			
			$check.each(function(i,value){
				value.onclick = function(){
					chechNum();
					allCheck();
				}
			});
			
			
			function allCheck() {//判断是否全选
				var $zLen = $('tbody input').length/2;
				var $cLen = $('tbody :checked').length;
				if ($zLen == $cLen) {
					$('#all').prop('checked',true);
				} else {
					$('#all').prop('checked',false);
				}
			}
			
			function chechNum() {
				var $cLen = $('tbody :checked');
				var $zongjia = 0 ;
				$cLen.each(function(idx,value){
					var $m = $(value).parent().parent().find('.price').text().length;
					var $n = Number($(value).parent().parent().find('.price').text().substring(1,$m));
					$zongjia += $n;
				});				
				var $zongjia = toDecimal($zongjia);
				$('#total').html("￥"+$zongjia);
				return $zongjia;
			}
			
			//删除选定商品
			$('#removeC').on('click',function(){
				var $cLen = $('tbody :checked');
				$cLen.each(function(idx,v){
					$(v).parent().parent().remove();
				});
				chechNum();
			})
			
			
		}
		
	}
})