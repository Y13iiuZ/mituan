<template>
    <div class="cart">
        <div class="content">
            <Header title="购物车" :edit="true"></Header>
            <CartList v-if="isShow" :changeShow="changeShow"></CartList>
            <Empty v-else></Empty>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Empty from '../../components/Empty.vue';
import Footer from '../../components/Footer.vue'
import Header from '../../components/Header.vue';
import CartList from './components/CartList.vue'
import { useStore } from 'vuex';
import { onMounted,ref } from 'vue';
    export default {
        components:{
            Footer,
            Empty,
            Header,
            CartList
        },
        setup(){
            const isShow = ref(true)
            const store = useStore()
            const init = ()=>{
                if(store.state.cartList.length === 0){
                    isShow.value=false;
                }
            };
            onMounted(()=>{
                init();
            });
            const changeShow = ()=>{
                isShow.value=false;

            }
            return {
                isShow,
                store,
                changeShow
            }
        }
    }
</script>

<style scoped>
    .cart {
        display: flex;
        flex-flow: column;
        height: 100%;
    }
    .cart .content {
        flex: 1;
        overflow-y: auto;
    }
</style>

