function BuyCart(element){
	this.ele=$(element);
	this.oClose();
	this.oBuy();
}
BuyCart.prototype.oBuy=function(){
	var oSelf=this;
	this.ele.find('.buy_btn').click(function(event){
		event.stopPropagation();
		var arr=[];
		if($.cookie('proList')){
			arr=JSON.parse($.cookie('proList'))
		}
		if(arr.length<5){
			var obj={};
			obj.picAdd=oSelf.ele.find('img').attr('src');
			obj.nameId=oSelf.ele.find('strong').html();
			obj.newprice=oSelf.ele.find('.price').html();
			if(fn(obj.nameId,arr,'nameId')){
				$('#buy_bg').css('display','block');
				$('#buy_tipsB').css('display','block');
			}else{
				arr.push(obj);
				var oString=JSON.stringify(arr);
				$.cookie('proList',oString,{
					expires:1,
					path:"/"
				})
				$('#buy_bg').css('display','block');
				$('#buy_tipsA').css('display','block');
				oSelf.ele.css('display','none');
			}
		}else{
			$('#buy_bg').css('display','block');
			$('#buy_tipsC').css('display','block');
		}
	})
//	以下为遍历数组判断对象是否重复
	function fn(value,Array,attr){
		var temp=false;
		for(var i=0;i<Array.length;i++){
			if(value==Array[i][attr]){
				temp=true;
				break;
			}
		}
		return temp;
	}
}

BuyCart.prototype.oClose=function(){
	var oSelf=this;
	this.ele.find('.close').click(function(){
		oSelf.ele.css('display','none');
	})
}
