<template>
    <div class="main">
        <Navbar/>
        <div class="kong"></div>
        <QualityShopList/>
        <QualityShopList1/>
        <QualityShopList2/>
        <QualityShopList3/>
        <QualityShopList4/>
        <QualityShopList/>
        <QualityShopList3/>
        <QualityShopList/>
    </div>
</template>

<script>
import QualityShopList from "../quality/qualityshoplist";
import QualityShopList1 from "./qualityshoplist1";
import QualityShopList2 from "./qualityshoplist2";
import QualityShopList3 from "./qualityshoplist3";
import QualityShopList4 from "./qualityshoplist4";
import Navbar from "../engorge/engorge-sort";
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
        Navbar,
        QualityShopList,
        QualityShopList1,
        QualityShopList2,
        QualityShopList3,
        QualityShopList4
        }
    
    }
</script>

<style scoped>
.main{
    width: 100%;
    background-color: #ccc;
}
.main .top-main{
    height: 2.6rem;
    width: 100%;
    display: flex;
    position: sticky;
    top: 3rem;
    background-color: red;
}
.main .top-main li{
    width: 5.2rem;
    background-color: #fff;
    margin-left: .5rem;
    text-align: center;
    line-height: 2.6rem;
}
.main .kong{
    height: .5rem;
}
.main-content {
    width: 100%;
    background-color: #ccc;
}
.main-content .main-content-first{
    height: 10rem;
    width: 94%;
    margin: 0 auto;
    background-color: #999;
}
.main-content .main-content-first .main-content-first-top{
    height: 5rem;
    width: 100%;
    position: relative;
    top:5%;
    left: 0%;
    background-color: lightblue;
}
.main-content .main-content-first .main-content-first-top .main-content-first-top-ck{

}
.main-content .main-content-first .main-content-first-top .main-content-first-top-ck .main-content-img li img{
    height: 4rem;
}
.main-content .main-content-first .main-content-first-btm{
    height: 4rem;
    margin-top: .5rem;
    width: 100%;
    background-color: green;
}
</style>
