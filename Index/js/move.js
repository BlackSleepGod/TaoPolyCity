function Move(element){
	this.ele=$(element);
	this.oAction();
}
Move.prototype.oAction=function(){
	this.ele.on({
		'mouseenter':function(){
			$(this).children().stop().animate({
				'left':'10px',
			},500)
		},
		'mouseleave':function(){
			$(this).children().stop().animate({
				'left':'0px'
			},500)
		}
	})
}
