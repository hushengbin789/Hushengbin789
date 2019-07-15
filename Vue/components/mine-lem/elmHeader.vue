<template>
    <div class="elmHeader">
        <div class="redPacket">
            <div class="red">
                <h1>1</h1>
                <span>个</span>
            </div>
            <div class="packet">
                <span>红包</span>
            </div>
        </div>
        <div class="redPacket">
            <div class="green">
                <h1>0</h1>
                <span>个</span>
            </div>
            <div class="packet">
                <span>金币</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "elmMain"
    }
</script>

<style scoped>
    .elmHeader {
        width: 100%;
        height: 80px;
        background-color: #FFFFFF;
        display: flex;
        justify-items: center;
    }
    .redPacket {
        width: 50%;
        height: 80px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        border-right: 2px solid #F2F2F2;
    }
    .red {
        display: flex;
    }
    .red h1 {
        color: #FF5F3E;
        font-size: 24px;
        font-weight: 900;
    }
    .red span {
        color: #FF5F3E;
        font-size: 12px;
        line-height: 28px;
    }
    .packet {
        margin-top: 5px;
        font-size: 12px;
        color: #666666;
    }
    .green {
        display: flex;
    }
    .green h1 {
        color: #6AC20B;
        font-size: 24px;
        font-weight: 900;
    }
    .green span {
        color: #6AC20B;
        font-size: 12px;
        line-height: 28px;
    }
</style>