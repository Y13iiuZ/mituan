<template>
    <div class="create-order">
        <Header title="订单"></Header>
        <van-contact-card type="edit" :tel="tel" :name="name" @click="onEdit" />
        <div class="content">
            <div v-for="(item,index) in store.state.orderList" :key="index">
            <van-card :num="item.num" :price="item.price" :title="item.title" :thumb="item.pic"/>
            </div>
        </div>
        <div class="pay-wrap">
            <div class="price">
                <span>商品金额</span>
                <span>￥{{ totalPrice }}</span>
            </div>
            <van-button type="success" class="pay-btn" block color="#ffc400" @click="handleCreateOrder">生成订单</van-button>
        </div>
    </div>
</template>

<script>
import Header from '../../components/Header.vue'
import { onMounted, reactive,toRefs } from 'vue'
import { useStore } from 'vuex'
import {useRouter,useRoute} from 'vue-router'
import { showDialog } from 'vant';
export default {
    components:{
        Header,
    },
    setup(){
        const store = useStore();
        const router = useRouter();
        const route = useRoute();
        const data = reactive({
            tel:"18381037727",//默认
            name:"张先生",
            totalPrice:0
        });
        const onEdit =()=>{
            router.push('/address');
        }
        const initPrice =()=>{
            let price = 0;
            if(store.state.orderList.length){
                store.state.orderList.forEach((item) => {
                    price+=item.num*item.price;
                });
            }
            data.totalPrice = price;
        }
        //初始化地址
        const initUser = ()=>{
            store.state.userAddress.forEach((item)=>{
                if(item.isDefault){
                    data.name=item.name;
                    data.tel=item.tel;
                }
            })
        }
        const handleCreateOrder = ()=>{
            showDialog({
            title: '提示',
            message: '恭喜!,您的订单已完成!',
            }).then(() => {
            //提交后，购物车应该显示买的东西
            let newList = store.state.cartList.filter(item=>{
                return !route.query.list.includes(item.id+'');
            });
            store.commit('delete',newList);
            store.commit('orderListEd');
            router.push("/order");
            });
        }
        onMounted(()=>{
            initPrice();
            initUser();
        })
        return {
            ...toRefs(data),
            onEdit,
            store,
            handleCreateOrder,

        }
    }
}
</script>

<style scoped>
    .create-order {
        display: flex;
        flex-flow: column;
        height: 100%;
    }
    .create-order .content {
        flex: 1;
        overflow-y: auto;
    }
    .create-order .pay-wrap {
        padding: 5px 0;
        width: 100%;
        background-color: #fff;
        border-top: 1px solid #e9e9e9;
    }
    .create-order .pay-wrap>div {
        display: flex;
        justify-content: space-between;
        padding: 0 5%;
        margin: 5px 0;
        font-size: 7px;
    }
    .create-order .pay-wrap>div span:nth-child(2){
        color: red;
        font-size: 10px;
    }
    .create-order .pay-wrap .pay-btn {
        width: 90%;
        margin: 0 auto;
    }
</style>