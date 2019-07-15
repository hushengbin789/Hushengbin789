<template>
     <div>
         <zk-time-down @time-end="message = '已结束'" :endTime='endTime'></zk-time-down>
         <p>{{message}}</p> 
    </div>
</template>

<script>
import zkTimeDown from './order-top'
export default {
    components : {
        zkTimeDown
    },
    data () {
        return {
            message : '',
            endTime :'2019-07-13 17:06:00'
            // new Date().getTime((30 * 60 * 1000))
            //'2019-07-12 16:06:00'  
            //new Date()+ (30 * 60 * 1000)   
            //(now = new Date(time = now.getTime() + 1000*60*30) )
            //(new Date()+ (30 * 60 * 1000))    
          

        }
    }
}
        
</script>

<style>
</style>