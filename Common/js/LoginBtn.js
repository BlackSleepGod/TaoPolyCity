function LoginBtn(element){
	this.ele=$(element);
	this.oLoading();
}

LoginBtn.prototype.oLoading=function(){
	var oSelf=this;
	this.ele.find('.del').click(function(){
		$(this).prev().val('');
	})
	this.ele.find('#username').on({
		'focus':function(){
			$(this).next().css('display','block');
		}
	})
	this.ele.find('.close').click(function(){
		$('#bg').css('display','none');
		$('#login_modal').css('display','none');
	})
	this.ele.find('#login_btn').click(function(){
		$.ajax({
			type:"get",
			url:"../../Resources/php/login.php",
			async:true,
			data:{
				username:oSelf.ele.find('#username').val(),
				password:oSelf.ele.find('#password').val()
			},
			success:function(data){
				if(data.content=='登录成功'){
					$.cookie('username',oSelf.ele.find('#username').val(),{
						expires:1,
						path:'/'
					})
					$('#bg').css('display','none');
					$('#login_modal').css('display','none');
					location.reload();
				}else{
					alert(data.content);
				}
			}
		});
	})
}
