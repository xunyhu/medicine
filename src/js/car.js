require(['config'],function(){
	require(['jquery'],function($){

		$.post('../api/usename.php', function(res) {
			var $obj = eval('(' + res + ')');
			if($obj.state) {
				$('.nh').html('欢迎您,' + $obj.nowUser + '<a class="logoutA" href="">退出</a>');
				$('.dr').text(' ');$('.zc').text(' ');
			}


			$('.logoutA').on('click', function() {
				$.post('../api/quit.php', function(res) {
					window.location.reload();
				})
			});
		});
		
		// $.get('../api/getgoods.php',)
		
	});
})