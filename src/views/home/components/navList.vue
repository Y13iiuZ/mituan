<template>
    <div v-for="(s,index) in navinfo " :key="index" class="item" @click="toStore">
        <img :src="s.pic"/>
        <div class="item-right">
            <div class="title">{{s.title}}</div>
            <div class="sales">{{s.sales}}</div>
            <div class="price">{{s.price}}</div>
            <div class="lable">
                <div v-for="(i,index) in s.lable" :key="index">
                    {{ i }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {useRouter} from 'vue-router'
export default {
    props:["navinfo"],
    setup(){
        const router = useRouter();
        const toStore = ()=>{
            router.push('/store');
        }
        return {
            toStore
        }
    }
};
</script>

<style scoped>
    .item {
        background-color: #fff;
        border-radius: 5px;
        display: flex;
        padding: 5px;
    }
    .item img {
        width: 50px;
        height: 50px;
        border-radius: 5px;
        margin-right: 10px;
    }
    .item .item-right {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
    }
    .item .item-right .title {
        font-size: 10px;
    }
    .item .item-right .lable {
        display: flex;
    }
    .item .item-right .lable div {
        background-color: #ffc400;
        padding: 1px 3px;
        border-radius: 3px;
    }
    .item .item-right .lable div:not(:first-child){
        margin-left: 3px;
    }
    .item:not(:first-child){
        margin-top: 5px;
    }
</style>