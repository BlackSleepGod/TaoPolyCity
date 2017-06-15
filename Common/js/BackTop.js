function BackTop(element){
	this.ele=$(element);
	this.moveAction();
}

BackTop.prototype.moveAction=function(){
	var oSelf=this;
	this.ele.find('.back').click(function(){
		$(window).scrollTop(0);
	})
}
