
//轮播图

function BannerPic(obj){
	this.boxDom = obj.boxDom;//轮播图的容器
	this.imgDoms = [];//存放所有图片dom的数组
	//属性
	this.width = obj.width;//轮播图的宽度
	this.height = obj.height;//轮播图的高度
	this.imgs = obj.imgs;//图片数组

	this.douSize = obj.douSize;//豆豆的大小
	this.douSpace = obj.douSize;//豆豆的间距
	this.douColor = obj.douColor;//豆豆的颜色
	this.douHighColor = obj.douHighColor;//高亮颜色
	this.douIsCircle =  obj.douIsCircle;//是否是圆的
	this.doudouDirection = obj.doudouDirection;//"上"，"右"，"下"，"左"，

	this.currIndex = 0;//当前显示的图片序号
	this.myTimer = null;
	this.timeSpace = obj.timeSpace;

	this.createUI();
	this.addEvent();
	this.autoPlay();
}

BannerPic.prototype.createUI = function(){
	//1、创建所有的img标签
	for(let i=0;i<this.imgs.length;i++){
		let imgDom = document.createElement("img");
		imgDom.src = this.imgs[i];
		imgDom.style.cssText = `position: absolute;
				left:${this.width}px;
				top:0px;
				width: 100%;
				height: 100%;`;
		if(i==0){
			imgDom.style.left = "0px";
		}
		this.boxDom.appendChild(imgDom);
		this.imgDoms.push(imgDom);
	}

	//2、创建UL（豆豆的容器）
	let ulDom = document.createElement("ul");
	ulDom.style.cssText=`position: absolute;
				list-style: none;				
				z-index: 3;`;

	switch(this.doudouDirection){
		case "上":
					ulDom.style.top="20px";
					ulDom.style.left= (this.width-this.douSize*2*this.imgs.length)/2 +"px";
					break;
		case "下":
					ulDom.style.bottom="20px";
					ulDom.style.left= (this.width-this.douSize*2*this.imgs.length)/2 +"px";
					break;
	}
	this.boxDom.appendChild(ulDom);
	//3、创建li（豆豆）
	for(let i=0;i<this.imgs.length;i++){
		let liDom = document.createElement("li");
		liDom.setAttribute("index",i);
		liDom.style.cssText =`
				float:left;
				width:${this.douSize}px;
				height: ${this.douSize}px;
				margin-right: ${this.douSpace}px;
				background-color: ${this.douColor};
			`;
		if(this.douIsCircle){
			liDom.style.borderRadius = "50%";
		}
		if(i==0){
			liDom.style.backgroundColor = this.douHighColor;
		}
		ulDom.appendChild(liDom);
	}
}


BannerPic.prototype.addEvent = function(){
	//2、停止播放（给box绑定事件）
	this.boxDom.onmouseenter = ()=>{
		this.stopPlay();
	}

	//3、继续播放（给box绑定事件）
	this.boxDom.onmouseleave = ()=> {
		this.autoPlay();
	}

	//4、跳转(给li)
	let liDoms = this.boxDom.lastElementChild.children;
	for(let i=0;i<liDoms.length;i++){
		let obj = this;

		liDoms[i].onclick = function(){
			obj.goImg(this.getAttribute("index"));
		}
		
	}
}

BannerPic.prototype.autoPlay = function(){
		this.myTimer = setInterval(()=>{
			//一、数据处理
			//1、改变数据
			let outIndex = this.currIndex;
			 this.currIndex++;

			//2、边界处理
			if( this.currIndex>this.imgs.length-1){
				 this.currIndex=0;
			}

			//二、改变外观
			 this.showImg( this.currIndex,outIndex);

		},this.timeSpace);

}

BannerPic.prototype.stopPlay = function(){
	window.clearInterval(this.myTimer);
}

BannerPic.prototype.goImg = function(index){
	//一、数据处理
	//1、改变数据
	let outIndex = this.currIndex;
	this.currIndex = index;
	
	//2、边界处理
	if(this.currIndex<0 || this.currIndex>this.imgs.length-1){
		this.currIndex = 0;
	}

	//二、改变外观
	this.showImg(this.currIndex,outIndex);

}

//显示指定的图片
//参数：
//进入的图片的下标
//出去的图片的下标
BannerPic.prototype.showImg=function(inIndex,outIndex){
	if(inIndex==outIndex){
		return;
	}

	if(inIndex<0 || inIndex>4){
		return;
	}

	if(outIndex<0 || outIndex>4){
		return;
	}

	this.imgDoms[inIndex].style.left = this.width+"px";
	//1、改图片
	slideInOut(this.imgDoms[inIndex],this.imgDoms[outIndex],200);

	//2、改豆豆		
	//1）、让所有的li的background-color是pink
	let liDoms = this.boxDom.lastElementChild.children;
	for(let i=0;i<liDoms.length;i++){
		liDoms[i].style.backgroundColor = this.douColor;
	}
	//2）、让当前li的background-color是red
	liDoms[inIndex].style.backgroundColor = this.douHighColor;
}