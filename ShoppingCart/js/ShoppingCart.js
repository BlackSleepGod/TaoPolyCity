$(function(){
	var cartCount2=new CartCount('.cart .count');
	var list1=new CartList('.listbox');
	var listContorl=new ListContorl('.cartlist',list1.oAction());
	var pay1=new Pay('.favorable','.cartlist .total');
	var backTop=new BackTop('.stick');
		var loginShow1=new LoginShow('.header .right .login');
	var loginBtn1=new LoginBtn('#login_modal');
})
