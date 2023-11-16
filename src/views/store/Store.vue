<template>
    <div class="storeDetails">
        <Header title="店铺"></Header>
        <div class="content">
            <div class="img"></div>
            <div class="foodSort">
                <div class="sort"></div>
                <div class="name">
                    {{ title }}
                    <img :src="img" alt="" class="store-img">
                </div>
                <van-tabs color="#ffc400">
                <van-tab v-for="(s,index) in storeData" :key="index" :title="s.name">
                    <FoodList :index="index" :foodData="s.data"></FoodList>
                </van-tab>
                </van-tabs>
            </div>
        </div>
        <van-action-bar>
        <van-action-bar-icon icon="chat-o" text="客服"/>
        <van-action-bar-icon icon="cart-o" text="购物车" :badge="store.state.cartList.length" @click="goCart" />
        <van-action-bar-button type="warning" text="加入购物车" @click="handleAddCart" />
        <van-action-bar-button type="danger" text="立即购买" @click="goBuy" />
        </van-action-bar>
    </div>
</template>

<script>
import FoodList from './components/FoodList.vue'
import {onMounted, reactive,toRefs} from 'vue'
import Header from '../../components/Header.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { showToast } from 'vant'
// import axios from 'axios'
import {getApiStoreData} from '../../api/api'
export default {
    components:{
        Header,
        FoodList,
    },
    setup(){
        let store = useStore();
        const router = useRouter();
        let datas = reactive({
            title:"鸿运酸菜鱼",
            img:'https://www.1616n.com/upload/resources/image/2017/09/26/680843.png',
            storeData:[],//接口api获取
        });
        const getStoreData = ()=>{
            getApiStoreData().then(res=>{
                // console.log(res)
                datas.storeData = res
            })
            // axios.get('/home/getStoreData').then(res=>{
            //     // console.log(res);//测试
            //     const {code,data} = res.data
            //     // console.log(data)
            //     if(code == 200){
            //         datas.storeData = data;//数组里面的对象直接接受就是
            //     }
            // })
        }
        onMounted(()=>{
            getStoreData();
        })
        const handleAddCart = (type)=>{
            const newList = store.state.cartList || [];
            datas.storeData.forEach(item=>{
                item.data.items?.forEach(item=>{
                    item.children.forEach(item=>{
                        if(item.num >0){
                            newList.push(item);
                        }
                    })
                })
            });
            if(newList.length === 0){
                // debugger;测试断点
                showToast("还未购买哟~");
                return;
            }
            store.commit("ADDCART",newList);
            type === 'buy'?goCart():'';
        }
        const goCart = ()=>{
            router.push('/cart');
        }
        const goBuy = ()=>{
            handleAddCart('buy')
        }
        return {
            ...toRefs(datas),
            handleAddCart,
            store,
            goCart,
            goBuy,
        }
    }
}
</script>

<style scoped>
    .storeDetails {
        height: 100%;
        display: flex;
        flex-flow: column;
    }
    .storeDetails .content {
        flex: 1;
        overflow-y: auto;
    }
    .storeDetails .content .img {
        background: url('@/assets/titles.jpg');
        width: 100%;
        height: 75px;
    }
    .storeDetails .content .foodSort {
        height: 200px;
        background-color: #fff;
        margin-top: -15px;
        border-radius: 10px 10px 0 0;
    }
    .storeDetails .content .foodSort .sort {
        margin-top: 5px;
    }
    .storeDetails .content .foodSort .name {
        display: flex;
        padding: 10px;
        justify-content: space-between;
    }
    .storeDetails .content .foodSort .name .store-img {
        width: 40px;
        height: 40px;
        border-radius:  5px;
        margin-top: -15px;
    }
</style>