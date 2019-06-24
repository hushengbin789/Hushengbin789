window.onload = function () {
    //倒计时
    var seconds=document.getElementsByClassName("seconds")[0];
    var spans=seconds.getElementsByTagName("span");
    var time=3800,h,s,m;
    var mytime = setInterval(()=>{
        time--;
        if(time<=0){
            time=0;
            clearInterval(mytime);
        }
        h=parseInt(time/3600);
        s=parseInt(time%3600/60);
        m=time%60;
        spans[0].innerHTML=h>9?h:"0"+h;
        spans[2].innerHTML=s>9?s:"0"+s;
        spans[4].innerHTML=m>9?m:"0"+m;
    },1000)
   
//   var header =document.getElementsByClassName("header")[0];
//   var header_height=header.offsetHeight;
  var zhongbu = document.getElementsByClassName("zhongbu")[0]
  var scroll_height ,opacity=0;
  var swiper_container=document.getElementsByClassName("swiper-container")[0];
  var lunbo=swiper_container.offsetHeight;
  var sousuo = document.getElementsByClassName("sousuo")[0]
      zhongbu.onscroll=function (){
          scroll_height = zhongbu.scrollTop;
          sousuo.style.position="fixed";
          if(scroll_height<=lunbo&&scroll_height>0){
            sousuo.style.backgroundColor="lightgreen";
            sousuo.style.opacity=scroll_height/lunbo;
          }else if(scroll_height==0){
            sousuo.style.backgroundColor="";
            sousuo.style.opacity=1;
          }else{
            sousuo.style.backgroundColor="lightgreen";
            sousuo.style.opacity=1;
          }
      
          
}
var product_1 =document.getElementsByClassName("product_1")[0];
var product =document.getElementsByClassName("product")[0];
for(var i=0;i<33;i++){
 var a= product_1.cloneNode(true);
 product.appendChild(a);
}

}
