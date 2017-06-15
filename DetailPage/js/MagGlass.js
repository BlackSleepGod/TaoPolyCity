function MagGlass(element){
	this.ele=$(element);
	this.glassNode=$(element).find('.glass');
	this.smallNode=$(element).find('.smallpic');
	this.bigNode=$(element).find('.bigpic');
	this.btnNode=$(element).find('.glass_btn');
	this.moveAction();
}

MagGlass.prototype.moveAction=function(){
	var oSelf=this;
	this.btnNode.click(function(){
		oSelf.glassNode.toggle();
		oSelf.bigNode.toggle();
	})
	this.smallNode.mousedown(function(evt){
		$(window).mousemove(function(evt){
			oSelf.left=evt.pageX-oSelf.smallNode.offset().left-oSelf.glassNode.width()/2;
			oSelf.top=evt.pageY-oSelf.smallNode.offset().top-oSelf.glassNode.height()/2;
			if(oSelf.left<=0){
				oSelf.left=0;
			}else if(oSelf.left>=oSelf.smallNode.width()-oSelf.glassNode.width()){
				oSelf.left=oSelf.smallNode.width()-oSelf.glassNode.width()
			}
			if(oSelf.top<=0){
				oSelf.top=0;
			}else if(oSelf.top>=oSelf.smallNode.height()-oSelf.glassNode.height()){
				oSelf.top=oSelf.smallNode.height()-oSelf.glassNode.height()
			}
			oSelf.glassNode.css({
				'left':oSelf.left+'px',
				'top':oSelf.top+'px'
			})
			var ratio=oSelf.bigNode.width()/oSelf.glassNode.width();
			oSelf.bigNode.css({
				'background-positionX':-oSelf.left*ratio+'px',
				'background-positionY':-oSelf.top*ratio+'px'
			})
		})
		$(window).mouseup(function(){
			$(window).off('mousemove mouseup');
		})
	})
}
