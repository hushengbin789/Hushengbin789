
//功能封装：运动
//参数：DOM元素，属性名，初始值，结束值，步长，时间间隔。
//返回值：无

function mover01(domObj,attr,startValue,endValue,step,timerSpace){

	let value = startValue;
	//方向：
	let direction = endValue>startValue?1:-1;//方向

	let myTimer = setInterval(function(){
		value+= direction*step;//方向*步长	
		if(direction==1?value>=endValue:value<=endValue){
			value = endValue;
			clearInterval(myTimer);
		}
		/*
		if(endValue>startValue){
			if(value>=endValue){
				value = endValue;
				clearInterval(myTimer);
			}
		}else{
			if(value<=endValue){
				value = endValue;
				clearInterval(myTimer);
			}
		}*/
		if(attr=='opacity'){
			domObj.style[attr] = value;
		}else{
			domObj.style[attr] = value+"px";	
		}
	},timerSpace);
}

//运动：
// 让一个物体花多长时间，从当前位置到指定位置
//参数：DOM元素，属性名，结束值，总时间

function mover02(domObj,attr,endValue,timeLong){
	let startValue = parseInt(getStyle(domObj,attr));
	//已知timeLong；
	let timerSpace= 16;
	let long = Math.abs(endValue-startValue);
	let step = long/(timeLong/timerSpace)  //long/(走多少次次数)
	mover01(domObj,attr,startValue,endValue,step,timerSpace);
}


//多属性运动的封装

//运动：
// 让一个物体花多长时间，从当前位置到指定位置

//参数：DOM元素，josn对象表示多个属性的结束值，总时间


// mover03($("#box"),{"width":500,"height":800},3000);

function mover03(domObj,obj,timeLong){
//	let startValue = parseInt(getStyle(domObj,attr));
	//多个起始值
	let qishizhis = {}
	for(let key in obj){//循环json对象，每循环一次，key是属性名
		qishizhis[key] = parseInt(getStyle(domObj,key));
	}

	//已知timeLong；
	let timerSpace= 16;
	//总路程
	// let long = Math.abs(endValue-startValue);
	let longs = {};
	for(let key in obj){//循环json对象，每循环一次，key是属性名
		longs[key] = Math.abs(obj[key]-qishizhis[key]);
	}

	// let step = long/(timeLong/timerSpace)  //long/(走多少次次数)
	let steps={}	
	for(let key in obj){//循环json对象，每循环一次，key是属性名
		steps[key] = longs[key]/(timeLong/timerSpace);
	}
	//当前值
	// let value = startValue;
	let values = {};
	for(let key in obj){//循环json对象，每循环一次，key是属性名
		values[key] = qishizhis[key];
	}

	//方向：
	// let direction = endValue>startValue?1:-1;//方向
	let fangxiangs = {};
	for(let key in obj){//循环json对象，每循环一次，key是属性名
		fangxiangs[key] = obj[key]>qishizhis[key]?1:-1;
	}

	let myTimer = setInterval(function(){
		// value+= direction*step;//方向*步长	
		for(let key in obj){//循环json对象，每循环一次，key是属性名
			values[key] += fangxiangs[key]*steps[key];
		}

		// // if(direction==1?value>=endValue:value<=endValue){
		// 	value = endValue;
		// 	clearInterval(myTimer);
		// }

		let isEnd = false;
		for(let key in obj){
			if(fangxiangs[key]==1?values[key]>=obj[key]:values[key]<=obj[key]){
				values[key] = obj[key];
				isEnd = true;
			}
		}
		if(isEnd==true){
			clearInterval(myTimer);
		}

		// domObj.style[attr] = value+"px";
		for(let key in obj){
			if(key=='opacity'){
				domObj.style[key] = values[key];
			}else{
				domObj.style[key] = values[key]+"px";
			}
		}
	},timerSpace);
}


//两张图片的淡入淡出
function fadeInOut(domObjIn,domObjOut,timeLong){
	//已知timeLong；
	let timerSpace= 16;
	let long = 1;
	let step = long/(timeLong/timerSpace) 
	
	let opacity = 0;

	let myTimer = setInterval(function(){
		opacity +=step;

		if(opacity>=1){
			opacity = 1;
			clearInterval(myTimer);
		}

		domObjIn.style.opacity = opacity;
		domObjOut.style.opacity = 1-opacity;

	},timerSpace);

}

// document.getElementById("box").t

//获取dom节点的样式属性(兼容性写法)
//参数：dom节点（对象），样式属性
//返回值：样式属性对应的值

function getStyle(domObj,attr) {
	if(domObj.currentStyle){//dom对象具有currentStyle属性,不为null
		return domObj.currentStyle[attr]
	}else{
		var obj = window.getComputedStyle(domObj);
		return obj[attr];
	}
}