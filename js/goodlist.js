define(['jquery','template'],function($,template){
	
	var Goods = function() {
		var self = this;
		this.ajax(function(res){
            console.log(res);
            console.log(typeof res);
            var obj = {"data":JSON.parse(res)};
        });
	}
	
	Goods.prototype.ajax = function(callback){
        $.ajax({
            type:"get",
            url:"http://localhost/S/data.goodlist.php",
            success:function(res){
                if(callback){
                    callback(res);
                }else{
                    console.log(res); 
                }
               
            },
            error:function(){
                console.log(arguments);
            }
        })
    };
    
    
    
    
    
    return Goods;
    
})