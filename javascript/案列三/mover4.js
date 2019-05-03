
//两张图片的淡入淡出
//参数：
//淡入的dom对象
//淡出的dom对象
//时长；

function fadeInOut(domInObj,domOutObj,timeLong,func){
	
	let timeSpace = 10 ;//时间间隔 = 总时间/步子数
	let stepCount = timeLong/timeSpace; //步子数 = 总时间/时间间隔
	let step = 1/stepCount ;//步长 = 路程/步子数


	let currOpacity = 0;
	let myTimer = setInterval(()=>{

		currOpacity+=step;

		if(currOpacity>=1){
			currOpacity=1;
			clearInterval(myTimer);
			func&&func();
		}

		domInObj.style.opacity = currOpacity;
		domOutObj.style.opacity = 1-currOpacity;
	},timeSpace);
}

//参数：
//滑入入的dom对象
//滑出的dom对象
//时长；

function slideInOut(domInObj,domOutObj,timeLong,func){
	
	let timeSpace = 10 ;//时间间隔 = 总时间/步子数
	let stepCount = timeLong/timeSpace; //步子数 = 总时间/时间间隔
	let step = domInObj.offsetWidth/stepCount ;//步长 = 路程/步子数


	let currLeft = 0;
	let myTimer = setInterval(()=>{

		currLeft -= step;

		if(currLeft<=-1*domInObj.offsetWidth){
			currLeft=-1*domInObj.offsetWidth;
			clearInterval(myTimer);
			func&&func();
		}

		domInObj.style.left =(currLeft+domInObj.offsetWidth)+"px";
		domOutObj.style.left = currLeft+"px";
	},timeSpace);
}