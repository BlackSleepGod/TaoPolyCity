function CartCount(element){
	this.ele=$(element);
	this.oTime();
}

CartCount.prototype.oTime=function(){
	var oSelf=this;
	var arr=[];
	setInterval(function(){
		if($.cookie('proList')){
			arr=JSON.parse($.cookie('proList'));
			oSelf.ele.html(arr.length);
		}
	},30)
}
