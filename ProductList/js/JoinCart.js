function JoinCart(element){
	this.ele=$(element);
	this.listNode=$(element).find('dl');
	this.btnNode=$(element).find('dl dd a');
	this.str=$(element).find('dl dd a')['selector'];
	this.oJoin();
}

JoinCart.prototype.oJoin=function(){
	var oSelf=this;
	this.btnNode.click(function(){
		$('#buy').css('display','block');
		var num=$(this).index(oSelf.str);
		$('#buy img').attr('src',oSelf.listNode.eq(num).find('img').attr('src'));
		$('#buy strong').html(oSelf.listNode.eq(num).find('strong').html());
		$('#buy .price').html(oSelf.listNode.eq(num).find('.price2').html());
	})

}

