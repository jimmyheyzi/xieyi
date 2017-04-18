function wheelEvenFn(obj,callbackfn){
	obj.bind("mousewheel DOMMouseScroll", function(event){
		var delta = (event.originalEvent.wheelDelta && (event.originalEvent.wheelDelta > 0 ? 1 : -1)) ||// chrome & ie
                (event.originalEvent.detail && (event.originalEvent.detail > 0 ? -1 : 1));// firefox
		//callbackfn(down);//函数回调
		//this 重定向
		callbackfn.call(obj,delta,event);//obj -> this
		/*
		var arr = [down,event,12]
		callbackfn.apply(obj,arr);
		*/
		//取消默认事件
		if(event.preventDefault){
			event.preventDefault();
		}
		return false;
	})
}













