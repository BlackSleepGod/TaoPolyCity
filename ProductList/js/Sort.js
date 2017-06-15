function Sort(element1,element2){
	this.ele=$(element1);
	this.showNode=$(element2);
	
	this.sortNode=$(element1).find('.screen a');
	this.chooseNode=$(element1).find('.choose i');
	this.oAction();
}
Sort.prototype.oAction=function(){
	var oSelf=this;
	this.chooseNode.click(function(){
		oSelf.chooseNode.css('background-position','-5px -252px')
		$(this).css('background-position','-5px -276px')
	})
	this.sortNode.toggle(
		function(){
			oSelf.sortNode.css('color','#666')
			$(this).css('color','#ff8400')
			$(this).find('s').css('background-position','-25px -71px')
			var arr=oSelf.oSort($(this).attr('name')).reverse();
			var i=0;
			oSelf.showNode.find('dl').each(function(index){
				if($(this).css('display')!='none'){
					$(this).find('img').attr('src',arr[i].picAdd);
					$(this).find('strong').html(arr[i].nameId);
					$(this).find('strong').attr('date-sales',arr[i].saleNum);
					$(this).find('.price1').html(arr[i].oldprice);
					$(this).find('.price2').html(arr[i].newprice);
					i++;
				}	
			})
		},
		function(){
			oSelf.sortNode.css('color','#666')
			$(this).css('color','#ff8400')
			$(this).find('s').css('background-position','-40px -72px')
			var arr=oSelf.oSort($(this).attr('name'));
			var i=0;
			oSelf.showNode.find('dl').each(function(index){
				if($(this).css('display')!='none'){
					$(this).find('img').attr('src',arr[i].picAdd);
					$(this).find('strong').html(arr[i].nameId);
					$(this).find('strong').attr('date-sales',arr[i].saleNum);
					$(this).find('.price1').html(arr[i].oldprice);
					$(this).find('.price2').html(arr[i].newprice);
					i++;
				}	
			})
		}
	)
}
Sort.prototype.oSort=function(type){
	var arr=this.oList();
	if(type=='saleNum'){
		for(var i=0;i<arr.length;i++){
			for(var j=0;j<arr.length-1-i;j++){
				if(parseFloat(arr[j].saleNum)>parseFloat(arr[j+1].saleNum)){
					var temp=arr[j];
					arr[j]=arr[j+1];
					arr[j+1]=temp;
				}
			}
		}
	}else if(type=='newprice'){
		for(var i=0;i<arr.length;i++){
			for(var j=0;j<arr.length-1-i;j++){
				if(parseFloat(arr[j].newprice)>parseFloat(arr[j+1].newprice)){
					var temp=arr[j];
					arr[j]=arr[j+1];
					arr[j+1]=temp;
				}
			}
		}
	}
	return arr;
}
Sort.prototype.oList=function(){
	var oSelf=this;
	var arr=[];
	this.showNode.find('dl').each(function(index){
		if($(this).css('display')!='none'){
			var obj={};
			obj.picAdd=$(this).find('img').attr('src');
			obj.nameId=$(this).find('strong').html();
			obj.saleNum=$(this).find('strong').attr('date-sales');
			obj.oldprice=$(this).find('.price1').html();
			obj.newprice=$(this).find('.price2').html();
			arr.push(obj);
		}
		
	})
	return arr;
}
