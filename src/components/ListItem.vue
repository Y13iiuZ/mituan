<template>
    <div class="content-item">
        <div class="left">
            <van-checkbox :name="item.id" v-if="showCheckBox" checked-color="#ffc400"/>
            <img :src="item.pic"/>
            <div class="text">
                <div class="title">{{ item.title }}</div>
                <van-icon name="add-o" v-if="item.add" @click="handleAdd(item.id)" />
                <van-stepper v-else v-model="item.num" @change="handlecChange" :name="item.id"/>
            </div>
        </div>
        <div class="price">￥{{ item.price }}</div>
    </div>
</template>

<script>
export default {
    props:["item","handleAdd","handlecChange",'showCheckBox'],
}
</script>

<style scoped>
    .content-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
    }
    .content-item .price {
        font-size: 7px;
        font-weight: 600;
    }
    .content-item .left {
        display: flex;
        align-items: center;
        flex: 1;
    }
    .content-item .left img {
        margin-left: 2px;
        width: 30px;
        height: 30px;
        margin-right: 2px;
        border-radius: 5px;
    }
    .content-item .left .text {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        height: 100%;
        position: relative;
        flex: 1;
    }
    .content-item .left .text .title {
        font-size: 7px;
    }
    .content-item .left .text .van-icon {
        color: red;
        position: absolute;
        font-size: 10px;
        right: -2px;
        bottom: 1px;
    }
</style>