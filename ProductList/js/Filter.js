function Filter(element1,element2){
	this.ele=$(element1);
	this.showNode=$(element2);
	this.oAction();
	this.str=element1+' li a';
}

Filter.prototype.oAction=function(){
	var oSelf=this;
	this.ele.find('li a').click(function(){
		var temp=oSelf.ele.find('li a').eq($(this).index(oSelf.str)).html();
		oSelf.ele.find('li a').css('color','#333');
		$(this).css('color','#36AB87');
		oSelf.showNode.find('dl').each(function(index){
			if($(this).attr('name')!=temp){
				$(this).css('display','none');
			}else{
				$(this).css('display','block');
			}
		});
	})
}
