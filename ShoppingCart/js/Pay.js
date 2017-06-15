function Pay(element1,element2){
	this.ele=$(element1);
	this.moneyNode=this.ele.find('.fa_computed');
	this.payNode=this.ele.find('.fa_sure');
	this.listNode=$(element2);
	this.oAction();
}

Pay.prototype.oAction=function(){
	var oSelf=this;
	setInterval(function(){
		oSelf.moneyNode.html(oSelf.listNode.find('.computed').html());
	},30)
	oSelf.payNode.click(function(){
		
		if($.cookie('proList')){
			alert('支付成功');
			$.cookie('proList','',{
				expries:-1,
				path:'/'
			});
			location.reload();
		}
	})
}
