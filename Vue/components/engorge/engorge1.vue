<template>
    <div class="top-scroll">
        <ul class="scroll-left">
            <li v-for="item in list"><p>{{item.text}}</p></li>
        </ul>
        <ul class="scroll-right">
            <i class="fa fa-angle-down" aria-hidden="true"></i>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                list:[
                    {text:"全部"},
                    {text:"简餐"},
                    {text:"烤肉拌饭"},
                    {text:"烧腊饭"},
                    {text:"咖哩饭"},
                    {text:"煲子饭"},
                ]
            }
        
        }
    }
</script>

<style scoped>
.top-scroll{
    height: 3rem;
    width: 100%;
    display: flex;
    position: fixed;
    top: 0;
     background-image: linear-gradient(to right, #0faefe, #1290fe);
}
.top-scroll .scroll-left{
    height: 2.6rem;
    width: 86%;
    display: flex;
    text-align: center;
    line-height: 2.6rem;
    overflow-x:scroll;
    overflow-y: hidden;
    margin: .2rem 0;
    border-right: 1px solid #0085f6;
}

.top-scroll .scroll-left li{
    height: 100%;
    width: 4rem;
    color: #dce0e7;
}
.top-scroll .scroll-left li:nth-child(1){
    color:#fff;
    font-weight: 600;
}
.top-scroll .scroll-right{
    height: 2.6rem;
    width: 14%;
    margin: 0.7rem 0;
  text-align: center;
}
.top-scroll .scroll-right i{
  font-size: 1.6rem;
  color: #e4e4e4;
}
</style>
