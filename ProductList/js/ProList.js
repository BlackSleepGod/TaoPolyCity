$(function(){
	var filter1=new Filter('.mold_list','.pro_list');
	var sort1=new Sort('.filter_box .fil_b','.pro_list');
	var joinCart1=new JoinCart('.pro_list');
	var cartCount1=new CartCount('.count');
	var backTop=new BackTop('.stick');
	var loginShow1=new LoginShow('.header .right .login');
	var loginBtn1=new LoginBtn('#login_modal');
	var buyCart1=new BuyCart('#buy');
	var buyBox1=new BuyBox('#buy_tipsA');
	var buyBox2=new BuyBox('#buy_tipsB');
	var buyBox3=new BuyBox('#buy_tipsC');
	var goPage=new GoPage('.pro_list');
})
