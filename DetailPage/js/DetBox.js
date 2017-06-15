function DetBox(element){
	this.ele=$(element);
	this.oPage()
	
}
DetBox.prototype.oPage=function(){
	if($.cookie('page')){
		var obj=JSON.parse($.cookie('page'))[0];

		if(obj['picAdd'].indexOf(' ')!=-1){
			var str1=obj['picAdd'].split(' ').join('%20');
		}else{
			var str1=obj.picAdd;
		}
		this.ele.find('img').attr('src',str1);
		console.log(this.ele.find('.bigpic').css('background-image'));
		this.ele.find('.bigpic').css('background-image','url(../img/img/pkg (14).jpg)');
		this.ele.find('strong').html(obj.nameId);
		this.ele.find('.price1').html(obj.oldprice);
		this.ele.find('.price').html(obj.newprice);
	}
}
