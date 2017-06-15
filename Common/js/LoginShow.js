function LoginShow(element){
	this.ele=$(element);
	this.showTime();
}

LoginShow.prototype.showTime=function(){
	if($.cookie('username')){
		var str=$.cookie('username');
		this.ele.html('欢迎您，'+str+'   <span class="exit_btn">退出</span>')
		this.ele.find('.exit_btn').click(function(){
			$.cookie('username','',{
				expries:-1,
				path:'/'
			})
			location.reload();
		})
	}
	this.ele.find('.lg_btn').click(function(){
		$('#bg').css('display','block');
		$('#login_modal').css('display','block');
	})
}
