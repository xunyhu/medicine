$(function(){
	
	var $username = $('#username');
	var $password = $('#password');
	var $confirm = $('#confirm');
	var $Login = $('#Login');
	var $boolean = false;
	var $b1=true,$b2=true,$b3=true;
	var aspan = $('#mmqd').children();
	var $Verification = $('.siwei');
	var $vrify = $('#vrify');
	
	$username.focus(function(){
		$username.next().html('请输入用户名')
	}).blur(function(){
		var reg = /^1[35]\d{9}$/ ;
		var phone = $(this).val();
		if (reg.test(phone)) {
			$username.next().html('');
			$b1 = true;
		} else {
			$username.next().html('手机格式错误');
			$b1 = false;
		}
	});
	
	$password.focus(function(){
		$password.next().html('请输入密码')
	}).keyup(function(){
		$password.next().html('');
		var psw = $(this).val();
		
		if (psw.length<=6) {
			for (var i=0;i<aspan.length;i++) {
				aspan[i].style.background = "#ccc";
			}
			aspan[0].style.background = "#669900";
		} else if (6 < psw.length &&　psw.length　<=10) {
			for (var i=0;i<aspan.length;i++) {
				aspan[i].style.background = "#ccc";
			}
			aspan[1].style.background = "#669900";
		} else if (psw.length > 10) {
			for (var i=0;i<aspan.length;i++) {
				aspan[i].style.background = "#ccc";
			}
			aspan[2].style.background = "#669900";
		}
		
	});
	
	$confirm.focus(function(){
		$confirm.next().html('请重新输入密码')
	}).blur(function(){
		var com = $(this).val();
		var psw = $password.val();
		if (com===psw) {
			$confirm.next().html('');
			$b2 = true;
		} else {
			$confirm.next().html('两次密码不一致');
			$b2 = false;
		}
	});
	
	$Verification.html(done());
	$('#hyh').click(function(){
		$Verification.html(done());
	});
	//随机生成四位数字验证码
	function done(codeLength){
		  if(codeLength==undefined){
		    codeLength=4;
		  }
		  var code="";
		  for(var i=0;i<codeLength;i++){
		    code +=Math.round(Math.random()*9).toString();
		  }
		  return code;
	}
	
	$vrify.keyup(function(){
		var r = $(this).val();
		var v = $Verification.html();
		if (r !== v) {
			$b3 = false;
		} else {
			$b3 = true;
		}
	});
	
	
	
	$Login.on('click',function(){
			
		if ( $b1 && $b2 && $b3 ) {
			$boolean = true;
		}
						
		if ($boolean) {
			var username = $username.val();
			var password = $password.val();
			$.ajax({
				type:"post",
				url:"http://localhost/sfbest/data/register.php",
				async:true,
				data : {
					'username' : username,
					'password' : password
				},
				success:function(res){
					console.log(res);
				},
				error : function(res) {
						console.log(res);
				}
			});
		} else {
			alert('请重新输入注册信息')
		}
		
		return false;
	})
	
	
	
})
