function Slide(element){
	this.ele=$(element);
	
	$showNode=$(element).find('.show_box');
	$btnNode=$(element).find('.slide_btn');
	
	this.move();
}
Slide.prototype.move=function(){
	var oSelf=this;
	oSelf.count=0;
	oSelf.timer=setInterval(function(){
		oSelf.oPlay();
	},3000)
	oSelf.ele.on({
		mouseenter:function(){
			clearInterval(oSelf.timer);
		},
		mouseleave:function(){
			oSelf.timer=setInterval(function(){
				oSelf.oPlay();
			},3000)
		}
	})
	$btnNode.find('li').click(function(){
		oSelf.count=$(this).index();
		$btnNode.find('li').removeClass().eq(oSelf.count).addClass('select');
		$showNode.animate({left:-$showNode.find('.dev').eq(0).width()*oSelf.count},500)
	})
}
Slide.prototype.oPlay=function(){
	this.count++;
	if(this.count==5){
		this.count=0;
	}
	$showNode.animate({left:-$showNode.find('.dev').eq(0).width()*this.count},500)
	$btnNode.find('li').removeClass().eq(this.count).addClass('select');
}
