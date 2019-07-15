<template>
    <div class="main">
        <!-- <ul class="top-main">
            <li v-for="item in list"><p>{{item.text}}</p></li>
        </ul> -->
        <EngorgeSort/>
        <div class="kong"></div>
        <!-- <HomeShopList/> -->
        <Engorge1/>
        <Engorge2/>
        <Engorge3/>
        <Engorge4/>
        <Engorge5/>
        <Engorge1/>
        <Engorge3/>
        <Engorge2/>
        <Engorge5/>
        <Engorge1/>
        <Engorge2/>
        <Engorge3/>
        <Engorge4/>
    </div>
</template>

<script>
import Engorge1 from "../engorge/Engorge1";
import Engorge2 from "../engorge/qualityshoplist1";
import Engorge3 from "./qualityshoplist2";
import Engorge4 from "./QualityShopList3";
import Engorge5 from "./qualityshoplist4";
import EngorgeSort from "./engorge-sort";
    export default {
        data(){
            return {
                list:[
                    {text:"综合排序"},
                    {text:"距离最近"},
                    {text:"品质联盟"},
                    {text:"筛选"},
                ]
        
            }
        },
        components :{
          EngorgeSort,
          Engorge1,
          Engorge2,
          Engorge3,
          Engorge4,
          Engorge5
        }
    
    }
</script>

<style scoped>
.main{
    width: 100%;
    background-color: #ccc;
}
.main .kong{
  height: .5rem;
}
</style>
