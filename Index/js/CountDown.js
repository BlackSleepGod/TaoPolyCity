function CountDown(element){
	this.ele=$(element);
	this.oTime();
}
CountDown.prototype.oTime=function(){
	var oSelf=this;
	oSelf.timer=setInterval(function(){
		var oldTime=new Date('2017/6/17 00:00:00');
		var newTime=new Date();
		var t=oldTime-newTime;
		if(t>0){
			var day=Math.floor(t/1000/3600/24);
			var hou=Math.floor(t/1000/3600)%24;
			var min=Math.floor(t/1000/60)%60;
			var sec=Math.floor(t/1000)%60;
		}else if(t<0){
			clearInterval(oSelf.timer);
		}
		oSelf.ele.html(day+'天'+hou+'时'+min+'分'+sec+'秒');
	},1000)
}
function CountDownS(element){
	this.ele=$(element);
	this.oTime();
}
CountDownS.prototype.oTime=function(){
	var oSelf=this;
	oSelf.timer=setInterval(function(){
		var oldTime=new Date('2017/6/17 00:00:00');
		var newTime=new Date();
		var t=oldTime-newTime;
		if(t>0){
			oSelf.ele.find('.day').html(Math.floor(t/1000/3600/24));
			oSelf.ele.find('.hos').html(Math.floor(t/1000/3600)%24);
			oSelf.ele.find('.min').html(Math.floor(t/1000/60)%60);
			oSelf.ele.find('.sec').html(Math.floor(t/1000)%60);
		}else if(t<0){
			clearInterval(oSelf.timer);
		}
	},1000)
}