<template>
    <div class="header">
        <van-icon name="arrow-left" class="icon" @click="toBack" />
        <div>{{ title }}</div>
        <div class="edit" v-if="edit" @click="handleEdit">{{ store.state.edit ? '编辑' : "完成" }}</div>
    </div>
</template>

<script>
import store from '../store';
import { useRouter } from 'vue-router';
import { showFailToast } from 'vant';
export default {
    props:["title","edit"],
    setup(){
        const router = useRouter();
        const toBack = ()=> {
            router.back();
        };
        const handleEdit =()=>{
                if(store.state.cartList.length){
                        store.commit('edit');
                        store.commit('changeDelete');
                }
                else {
                    showFailToast("请添加商品到购物车");
                }
        }
        return{
            toBack,
            handleEdit,
            store,
        }
    },
};
</script>

<style scoped>
    .header {
        background-color: #fff;
        height: 20px;
        font-size: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #d7d7d7;
    }
    .header .edit {
        position: absolute;
        font-size: 8px;
        right: 7px;
        font-weight: normal;
    }
    .header .icon {
        position: absolute;
        left: 5px;
    }
</style>