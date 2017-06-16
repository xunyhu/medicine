define(['jquery','top','head','foot','template'],function($,top,head,foot,template){
	
	//一般情况下模块会返回一个对象，获取构造函数
	return {
		init : function(){
			var self = this;
			this.ajax(function(res){
				//console.log(res);
				var goodlist = document.getElementsByClassName("goodlist")[0];
				for (var i=0;i<res.length;i++) {
					var dl = document.createElement('dl');
					dl.innerHTML = '<dt><img src="'+res[i].img+'"/></dt>'
					+'<dd class="price">'+res[i].price +'</dd>'
					+'<dd>'+res[i].introduce+'</dd><dd>'+res[i].evaluate +'<span>自营</span></dd>'
					+'<dd class="gocar">加入购物车</dd>';
					goodlist.appendChild(dl);										
				}
							
			});
			top.init();
			head.init();
			foot.init();
			self.bind();
		},
		
		ajax : function(callback){

			$.ajax({
	            type:"get",
	            url:"../data/list.json",
	            success:function(res){	                
	                  //  console.log(res);
	                    if(callback){
	                    	callback(res)
	                    }
            	}		
			})

		},
		
		bind : function() {
			$('.goodlist').on('click','.gocar',function(e){
				e = e || window.event;
				//console.log(e);
				var a = $(this).parent().find('dt').html();
				console.log(a);
			});
			
			
			
			
			
		}
		
	}
})