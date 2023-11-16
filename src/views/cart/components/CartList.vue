<template>
    <div class="cartList">
        <div class="content">
            <van-checkbox-group v-model="checked" @change="groupChange">
                <div v-for="(item,index) in store.state.cartList" :key="index">
                    <ListItemVue :item="item" :handlecChange="handlecChange" :showCheckBox="true"></ListItemVue>
                </div>
            </van-checkbox-group>
        </div>
        <van-submit-bar :price="allPrice" button-text="提交订单" @submit="onSubmit" class="submit-all" button-color="#ffc400" v-if="store.state.isDelete">
        <van-checkbox v-model="submitChecked" checked-color="#ffc400" @click="choseAll">全选</van-checkbox>
        </van-submit-bar>
        <div class="buy" v-else>
            <div class="left">
                <van-checkbox v-model="submitChecked" checked-color="#ffc400" @click="choseAll">全选</van-checkbox>
            </div>
            <div class="delete" @click="Deletes">
                删除
            </div>
        </div>
    </div>
</template>

<script>
import { computed, onMounted, reactive,toRefs } from 'vue'
import { useStore } from 'vuex'
import ListItemVue from '../../../components/ListItem.vue'
import { showFailToast } from 'vant';
import { useRouter } from 'vue-router';
export default {
    setup(props){
        const router = useRouter();
        const store =useStore();
        const data = reactive({
            checked:[],
            submitChecked:true,
        })
        const handlecChange = (value,detail)=>{
                store.state.cartList.map((item)=>{
                    if(item.id === detail.name){
                        item.num = value;
                    }
                })
        }
        const init =()=>{
            data.checked = store.state.cartList.map(item=>item.id)
        }
        onMounted(()=>{
            init();
        })
        const onSubmit = ()=>{
            if(data.checked.length){
                store.commit('pay',upData());
                router.push({
                    path:'/createorder',
                    query:{
                        list:data.checked
                    },
                });
            }
            else {
                showFailToast("请选择你想吃的食物哦!!!");
            }
        }
        const choseAll = ()=>{
            if(data.checked.length !== store.state.cartList.length){
                init();
            }
            else {
                data.checked=[];
            }
        }
        const groupChange = (result)=>{
                // console.log(result);//测试
                if(result.length === store.state.cartList.length){
                    data.submitChecked = true
                }
                else {
                    data.submitChecked = false
                }
                data.checked = result;
        }
        const allPrice = computed(()=>{
             let countlist = upData();
             let sum =0
             countlist.forEach(item => {
                    sum+= item.num *item.price;
             });
             return sum*100;
        })
        const upData = (type)=>{
            return store.state.cartList.filter(item=>{
                return type === 'delete' ? !data.checked.includes(item.id):data.checked.includes(item.id);
             })
        }
        const Deletes = ()=>{
                //部分//全部
                if(data.checked.length){
                    store.commit('delete',upData('delete'));
                    data.checked = []
                    //如果里面没有数据
                    if(!store.state.cartList.length){
                        props.changeShow();
                        store.commit('edit','delete');
                    }
                }
                else {
                    showFailToast("请选择要删除的商品")
                }
        }
        return {
            ...toRefs(data),
            handlecChange,
            store,
            onSubmit,
            choseAll,
            groupChange,
            allPrice,
            Deletes,
            upData,
        }
    },
    components:{
        ListItemVue,
    },
    props:['changeShow'],
}
</script>

<style scoped>
    .cartList {
        font-size: 10px;
        flex: 1;
        position: relative;
        overflow-y: auto;
        padding: 10px 10px 27px;
    }
    .cartList .submit-all {
        position: fixed;
        bottom: 26px;
    }
    .cartList .buy {
        position: fixed;
        bottom: 25px;
        right: 0;
        display: flex;
        justify-content: space-between;
        width: 100%;
        background-color: #fff;
        border-radius: 5px;
        height: 30px;
        align-items: center;
        padding: 0 8px;
        box-sizing: border-box;
    }
    .cartList .buy .left {
        display: flex;
        align-items: center;
    }
    .cartList .buy .delete {
        color: #fff;
        background-color: #ffc400;
        border-radius: 10px;
        font-size: 5px;
        font-weight: 600;
        width: 50px;
        height: 20px;
        text-align: center;
        line-height: 20px;
    }
    .cartList .content {
        padding: 5px;
        background-color: #fff;
        border-radius: 5px;
    }
</style>