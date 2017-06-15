function GoPage(element){
	this.ele=$(element);
	this.goAction();
}

GoPage.prototype.goAction=function(){
	this.ele.find('dl img').click(function(){
		var obj={};
		var arr=[];
		obj.picAdd=$(this).closest('dl').find('img').attr('src');
		obj.nameId=$(this).closest('dl').find('strong').html();
		obj.oldprice=$(this).closest('dl').find('.price1').html();
		obj.newprice=$(this).closest('dl').find('.price2').html();
		arr.push(obj);
		var str=JSON.stringify(arr);
		$.cookie('page',str,{
			expires:1,
			path:'/'
		})
		location.replace('../../DetailPage/html/DetailPage.html');
	})
}
