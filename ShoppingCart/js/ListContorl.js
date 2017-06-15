function ListContorl(element,arr){
	this.ele=$(element);
	this.trNode=$(element).find('.listbox tbody tr');
	this.delNode=$(element).find('.listbox tbody .del');
	this.str=this.delNode['selector'];
	this.downNode=this.ele.find('.listbox tbody .down');
	this.upNode=this.ele.find('.listbox tbody .up');
	this.subNode=this.ele.find('.listbox tbody .sub');
	this.arr=arr;
	this.statusNode=this.ele.find('.total .total_status');
	this.numNode=this.ele.find('.total .num');
	this.computedNode=this.ele.find('.total .computed')
	this.oTime();
	this.oDel();
	this.changeCount();
}

ListContorl.prototype.oDel=function(){
	var oSelf=this;
	oSelf.delNode.click(function(){
		for(var i=0;i<oSelf.arr.length;i++){
			if(oSelf.arr[i].nameId==$(this).closest('tr').find('.nameId').html()){
				oSelf.arr.splice(i,1);
			}
		}
		var oString=JSON.stringify(oSelf.arr);
		$.cookie('proList',oString,{
			expries:1,
			path:'/'
		})
		$(this).closest('tr').remove();
	})
}

ListContorl.prototype.changeCount=function(){
	var oSelf=this;
	var num=1;
	oSelf.downNode.click(function(){
		num--;
		if(num<1){
			num=1
			alert('已经不能再减了')
		}
		$(this).next().val(num);
		var sum=Math.ceil(num*$(this).closest('tr').find('.price').html()*100)/100;
		$(this).closest('tr').find('.sub').html(sum);
	})
	oSelf.upNode.click(function(){
		num++;
		if(num>1){
			num=1
			alert('该道具限购买1个')
		}
		$(this).prev().val(num);
		var sum=Math.ceil(num*$(this).closest('tr').find('.price').html()*100)/100;
		$(this).closest('tr').find('.sub').html(sum);
	})
}

ListContorl.prototype.oTime=function(){
	var oSelf=this;
	setInterval(function(){
		oSelf.statusNode.html('('+oSelf.ele.find('.listbox tbody tr').length+'/5)');
		oSelf.numNode.html(oSelf.ele.find('.listbox tbody tr').length);
		var sum=0;
		oSelf.ele.find('.listbox tbody .sub').each(function(){
			sum=sum+$(this).html()*100;
		})
		
		oSelf.computedNode.html(sum/100);
	},30)
}
