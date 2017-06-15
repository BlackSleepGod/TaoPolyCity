function CartList(element){
	this.ele=$(element);
	this.tbodyNode=$(element).find('tbody');

}

CartList.prototype.oAction=function(){
	if($.cookie('proList')){
		var arr=JSON.parse($.cookie('proList'));
		console.log(arr);
		for(var i=0;i<arr.length;i++){
			if(arr[i]['picAdd'].indexOf(' ')!=-1){
				var str1=arr[i]['picAdd'].split(' ').join('%20');
			}else{
				var str1=arr[i]['picAdd'];
			}
			var str='<tr><td class="first"><img src='+str1+'><a class="nameId">'+arr[i]['nameId']+'</a></td><td>皮肤</td><td><span class="price">'+arr[i]['newprice']+'</span>Q币</td><td>永久</td><td style="width: 110px;"><span class="down">-</span><input class="count" value="1" /><span class="up">+</span></td><td>无优惠</td><td style="width:150px"><span class="sub">'+arr[i]['newprice']+'</span>Q币</td><td><a class="atte">关注</a><a class="del">删除</a></td></tr>'
			this.tbodyNode.append(str);
		}
	}
	return arr;
}
