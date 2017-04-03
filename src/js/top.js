define(['jquery'],function($){

	return {
		init : function(){
			this.bind();
		},
		bind : function(){
			$('.top-left ul').on('click','span',function(){
				$('.city').text($(this).html());
			});
		}
	}
	
	
})