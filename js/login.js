define(['jquery','template'],function($,template){
	
	return {
		
		init : function() {
			$('body').append( this.template.login() );
			this.bind();
		},
		
		template : {
			login : template.compile('<div class="header">'+
										'<a href="../index.html"><img src="../images/logo.png" /></a>'+
										'<span>欢迎登录</span>'+
									'</div>'+
									'<div class="enterm">'+
										'<div class="pic"><img src="../images/enter.png" style="margin: 32px 20px;float: left;"/></div>'+
										'<div class="login">'+
											'<p>您还未登入<a class="fr" href="regsiter.html">免费注册</a></p>'+
											'<div class="denlu">'+
												'<span>优选账号</span><span class="sfzh">速运账号</span>'+
												'<div class="dd">'+
													'<form>'+
														'<label>手机/验证邮箱/用户名</label><br />'+
														'<input id="username" /><br />'+
														'<label>登入密码</label><br />'+
														'<input type="password" id="password" /><br />'+
														'<input id="scode"/><a id="yzm"></a><br />'+
														'<label class="wjma"><a>忘记密码？</a></label><br />'+
														'<label id="logindex"><a>登&nbsp;录</a></label>'+
													'</form>'+
													'<div class="hz">'+
														'<ul>'+
															'<li>合作网站账户登入</li>'+
															'<li><a>QQ</a> | <a>新浪微博</a> | <a>腾讯微博</a> | <a>支付宝</a></li>'+
														'</ul>'+
													'</div>'+
												'</div>'+
											'</div>'+											
										'</div>'+
									'</div>'+
									'<div class="loginfoot">'+
										'<span><a>关于我们</a>|<a>联系我们</a>|<a>招聘人才</a>|<a>友情链接</a>|<a>供应商申请</a></span>'+
										'<p>北京顺丰电子商务有限公司</p>'+
										'<p>北京市公安局顺义分局备案11011302000890号|京ICP备12011349号|企业营业执照</p>'+
										'<p>Copyright© 顺丰优选 sfbest.com 版权所有</p>'+
									'</div>')
		},
		
		
		bind : function() {
			yzm();
			function yzm() {
				var codes=[];
				//数字:48-57;unicode编码
				for(var i=48;i<57;codes.push(i),i++);
				//大写字母:65-90;unicode编码
				for(var i=60;i<90;codes.push(i),i++);
				//小写字母:97-122;unicode编码
				for(var i=97;i<122;codes.push(i),i++);
				var arr=[];
				for(var i=0;i<4;i++) {   //从0-61之间取随机数
				    var index = Math.floor(Math.random() * (61 - 0 + 1) + 0);
				    var char = String.fromCharCode(codes[index]);
				    arr.push(char);
				}
				 var code=arr.join("");
				 //document.write("验证码:"+code);
				
				$('#yzm').html(code);
			}
			$('#yzm').click(function(){
				yzm();
			});
			
			var $login = $('#logindex');
			
			$login.click(function(){
				var $name = $('#username').val();
				var $psw = $('#password').val();
				$.ajax({
					type:"post",
					url:"http://localhost/sfbest/data/login.php",
					async:true,
					data : {
						'username' : $name,
						'password' : $psw,		
					},
					success : function(res){
						console.log(res);
						//修改cookie						
															
						if(res=="登陆成功"){
							//console.log(res);
							location.href = "http://localhost/sfbest/";
//							open("首页地址")
						} else if (res == "登陆失败") {
							alert('用户不存在')
						}
					},
					error : function() {
						console.log(arguments)
					}
				});
				return false;
			})
			
		
		
		
		
		
		
		
		
		
		
		
		}
		
		
	}
	
})