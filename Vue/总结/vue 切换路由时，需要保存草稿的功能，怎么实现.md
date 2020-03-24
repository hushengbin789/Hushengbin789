## vue 切换路由时，需要保存草稿的功能，怎么实现呢？
在做后台管理系统的时候发现在切换tab操作时，切换回来操作内容没有被保存，体验相当的不好
```
<keep-alive>
```
是Vue的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染DOM。

只需要在页面渲染的地方把
```
<router-view></router-view>
```
改成
```
<keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
</keep-alive>
<router-view v-if="!$route.meta.keepAlive"></router-view>
```
即可

例如：
<div class="content">
      <!-- <transition name="move" mode="out-in"><router-view></router-view></transition> -->
	  <transition name="move" mode="out-in">
		  <keep-alive>
			<router-view v-if="$route.meta.keepAlive"></router-view>
		  </keep-alive>
		    <router-view v-if="!$route.meta.keepAlive"></router-view>
	  </transition>
    </div>
即：当路由的meta属性的keepAlive属性值为true时页面的状态保存，其他情况下不保存

接下来设置路由的keepAlive属性值
```
{
    path:'/payRefund',
    component:payRefund,
    name:'渠道方信息',
    meta:{
        requireAuth:true,
        keepAlive:true
        }
},{
    path:'/buyChannel',
    component:buyChannel,
    name:'买量渠道部署',
    meta:{
    requireAuth:true,
    keepAlive:true
    }
},{
    path:'/cpsChannel',
    component:cpsChannel,
    name:'CPS渠道部署',
    meta:{
        requireAuth:true,
        keepAlive:true
        }
}
```
这样即可实现切换路由时保存之前相应的操作


场景：
为了防止用户失误点错关闭按钮等等，导致没有保存已输入的信息(关键信息)。
用法：
在路由组件中：
```
beforeRouteLeave (to, from, next) {

  if(用户已经输入信息){
     //出现弹窗提醒保存草稿，或者自动后台为其保存
    
  }else{ 
    next(true);//用户离开
  }
    
}
```
