function BuyBox(element){
	this.ele=$(element);
	this.oAction();
}

BuyBox.prototype.oAction=function(){
	var oSelf=this;
	this.ele.find('.close').click(function(){
		$('#buy_bg').css('display','none');
		oSelf.ele.css('display','none');
	})
	this.ele.find('.ok').click(function(){
		$('#buy_bg').css('display','none');
		oSelf.ele.css('display','none');
	})
}
