function RegisterUser(element){
	this.ele=$(element);
	this.usernameNode=this.ele.find('#username');
	this.passwordNode=this.ele.find('#password');
	this.pwdAgainNode=this.ele.find('#pwd_again');
	this.btnNode=this.ele.find('#sure_btn');
	this.phoneNode=this.ele.find('#phoneNum')
	this.codeNode=this.ele.find('#code');
	this.oAction();
	this.oUserName();
	this.oPassWord();
	this.oPwdAgain();
	this.oSex();
	this.oBrithday();
	this.oPhone();
	this.oCode();
}

RegisterUser.prototype.oAction=function(){
	var oSelf=this;
	this.btnNode.click(function(){
		if(/^[1-9]\d{5,10}$/.test(oSelf.usernameNode.val())&&/^\S{6,16}$/.test(oSelf.passwordNode.val())&&!/^\d{0,9}$/.test(oSelf.passwordNode.val())&&!/\s/.test(oSelf.passwordNode.val())&&oSelf.pwdAgainNode.val()==oSelf.passwordNode.val()&&/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/.test(oSelf.phoneNode.val())&&oSelf.ele.find('#code_ipt').val()==oSelf.ele.find('#code a').html()){
			$.ajax({
				url:"../../Resources/php/register.php",
				data:{
					username:oSelf.usernameNode.val(),
					password:oSelf.passwordNode.val()
				},
				async:true,
				success:function(data){
					alert(data.content);
				},
			});
			console.log(oSelf.usernameNode.val(),oSelf.passwordNode.val())
		}
	})
}
RegisterUser.prototype.oUserName=function(){
	this.usernameNode.on({
		'focus':function(){
			$(this).attr('class','ipt');
			$(this).closest('.ipt_box').next().css('display','block');
			$(this).closest('.ipt_box').next().html('请输入账号');
			$(this).closest('.ipt_box').next().attr('class','tips')
		},
		'blur':function(){
			var str=$(this).val()
			if(/^[1-9]\d{5,10}$/.test(str)){
				$(this).closest('.ipt_box').next().attr('class','true');
				$(this).closest('.ipt_box').next().html('');
				$(this).attr('class','');
			}else{
				$(this).closest('.ipt_box').next().attr('class','false');
				$(this).closest('.ipt_box').next().html('账号为6-11位数字');
				$(this).attr('class','error');
			}
		}
	})
}
RegisterUser.prototype.oPassWord=function(){
	this.passwordNode.on({
		'focus':function(){
			$(this).closest('.ipt_box').next().find('.tips_box').css('display','block');
			$(this).closest('.ipt_box').next().find('.result').css('display','none');
			$(this).attr('class','ipt')
			$(this).keyup(function(){
				var str=$(this).val();
				if(/^\S{6,16}$/.test(str)){
					$(this).closest('.ipt_box').next().find('.tips_box p').eq(0).attr('class','yes');
				}else{
					$(this).closest('.ipt_box').next().find('.tips_box p').eq(0).attr('class','no');
				}
				if(/\s/.test(str)){
					$(this).closest('.ipt_box').next().find('.tips_box p').eq(1).attr('class','no');
				}else{
					$(this).closest('.ipt_box').next().find('.tips_box p').eq(1).attr('class','yes');
				}
				if(/^\d{0,9}$/.test(str)){
					$(this).closest('.ipt_box').next().find('.tips_box p').eq(2).attr('class','no');
				}else{
					$(this).closest('.ipt_box').next().find('.tips_box p').eq(2).attr('class','yes');
				}
				if(str==''){
					$(this).closest('.ipt_box').next().find('.tips_box p').attr('class','default');
				}
			})
		},
		'blur':function(){
			var str=$(this).val();
			if(/^\S{6,16}$/.test(str)&&!/^\d{0,9}$/.test(str)&&!/\s/.test(str)){
				$(this).closest('.ipt_box').next().find('.tips_box').css('display','none');
				$(this).closest('.ipt_box').next().find('.result').css('display','block');
				$(this).attr('class','');
				if(/^[a-zA-Z]+$/.test(str)){
					$(this).closest('.ipt_box').next().find('.result .result_p').css({
						'background-position':'0 -100px',
						'color':'#ff9c3a'
					})
					$(this).closest('.ipt_box').next().find('.result .result_p').html('弱');
					$(this).closest('.ipt_box').next().find('.result p').html('试试字母、数字、标点的组合吧');
				}else if(/^\d+$/.test(str)){
					$(this).closest('.ipt_box').next().find('.result .result_p').css({
						'background-position':'0 -100px',
						'color':'#ff9c3a'
					})
					$(this).closest('.ipt_box').next().find('.result .result_p').html('弱');
					$(this).closest('.ipt_box').next().find('.result p').html('试试字母、数字、标点的组合吧');
				}else if(/^[^0-9a-zA-Z]+$/.test(str)){
					$(this).closest('.ipt_box').next().find('.result .result_p').css({
						'background-position':'0 -100px',
						'color':'#ff9c3a'
					})
					$(this).closest('.ipt_box').next().find('.result .result_p').html('弱');
					$(this).closest('.ipt_box').next().find('.result p').html('试试字母、数字、标点的组合吧');
				}
				if(/[a-zA-Z]+/.test(str)&&/[0-9]+/.test(str)&&/[^0-9a-zA-Z]+/.test(str)){
					$(this).closest('.ipt_box').next().find('.result .result_p').css({
						'background-position':'0 -190px',
						'color':'#61d01c'
					})
					$(this).closest('.ipt_box').next().find('.result .result_p').html('强');
					$(this).closest('.ipt_box').next().find('.result p').html('密码强度好，请记牢!');
				}else if(/[a-zA-Z]+/.test(str)&&/[0-9]+/.test(str)){
					$(this).closest('.ipt_box').next().find('.result .result_p').css({
						'background-position':'0 -142px',
						'color':'#61d01c'
					})
					$(this).closest('.ipt_box').next().find('.result .result_p').html('中等');
					$(this).closest('.ipt_box').next().find('.result p').html('复杂度还行，再加强一下等级？');
				}else if(/[a-zA-Z]+/.test(str)&&/[^0-9a-zA-Z]+/.test(str)){
					$(this).closest('.ipt_box').next().find('.result .result_p').css({
						'background-position':'0 -142px',
						'color':'#61d01c'
					})
					$(this).closest('.ipt_box').next().find('.result .result_p').html('中等');
					$(this).closest('.ipt_box').next().find('.result p').html('复杂度还行，再加强一下等级？');
				}else if(/[0-9]+/.test(str)&&/[^0-9a-zA-Z]+/.test(str)){
					$(this).closest('.ipt_box').next().find('.result .result_p').css({
						'background-position':'0 -142px',
						'color':'#61d01c'
					})
					$(this).closest('.ipt_box').next().find('.result .result_p').html('中等');
					$(this).closest('.ipt_box').next().find('.result p').html('复杂度还行，再加强一下等级？');
				}
			}else{
				$(this).attr('class','error');
			}
		}
	})
}
RegisterUser.prototype.oPwdAgain=function(){
	var oSelf=this;
	this.pwdAgainNode.on({
		'focus':function(){
			$(this).attr('class','ipt');
			$(this).closest('.ipt_box').next().css('display','block');
			$(this).closest('.ipt_box').next().html('请再次输入密码');
			$(this).closest('.ipt_box').next().attr('class','tips')
		},
		'blur':function(){
			var str=$(this).val()
			if(str==oSelf.passwordNode.val()){
				$(this).closest('.ipt_box').next().attr('class','true');
				$(this).closest('.ipt_box').next().html('');
				$(this).attr('class','');
			}else{
				$(this).closest('.ipt_box').next().attr('class','false');
				$(this).closest('.ipt_box').next().html('密码不一致');
				$(this).attr('class','error');
			}
		}
	})
}
RegisterUser.prototype.oSex=function(){
	var oSelf=this;
	this.ele.find('.box .sex_box a').on({
		'focus':function(){
			oSelf.ele.find('.box .sex_box a').removeClass().eq($(this).index()).addClass('check');
		},
		'blur':function(){
			oSelf.ele.find('.box .sex_box a').each(function(){
				if($(this).attr('class')=='check'){
					$(this).attr('class','checked');
				}
			})
		}
	})
}
RegisterUser.prototype.oBrithday=function(){
	var oSelf=this;
	this.ele.find('.box5 .birthday_box div').on({
		'click':function(){
			$(this).find('ul').css('display','block');
		},
		'mouseleave':function(){
			$(this).find('ul').css('display','none');
		}
	})
	oSelf.ele.find('.box5 .birthday_box div ul li').click(function(event){
		event.stopPropagation();
		$(this).parent().prev().html($(this).html());
		$(this).closest('ul').css('display','none');
	})
}
RegisterUser.prototype.oPhone=function(){
	var oSelf=this;
	this.phoneNode.on({
		'focus':function(){
			$(this).attr('class','ipt');
			$(this).closest('.ipt_box').next().css('display','block');
			$(this).closest('.ipt_box').next().html('');
			$(this).closest('.ipt_box').next().attr('class','tips');
			oSelf.ele.find('.code_box').css('display','block');
		},
		'blur':function(){
			var str=$(this).val()
			if( /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/.test(str)){
				$(this).closest('.ipt_box').next().attr('class','true');
				$(this).closest('.ipt_box').next().html('');
				$(this).attr('class','');
			}else{
				$(this).closest('.ipt_box').next().attr('class','false');
				$(this).closest('.ipt_box').next().html('请输入有效的手机号码');
				$(this).attr('class','error');
			}
		}
	})
}
RegisterUser.prototype.oCode=function(){
	this.codeNode.find('a').click(function(){
		$(this).css({
			'backgroundColor':'#fff',
			'font-weight':'bold',
		})
		var str='';
		for(var i=0;i<4;i++){
			str+=Math.floor(Math.random()*10);
		}
		$(this).html(str);
	})
}
