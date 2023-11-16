<template>
    <div>
        <Header title="地址管理"/>
        <van-address-list
        :list="list"
        :disabled-list="disabledList"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        />
    </div>
</template>

<script>
import Header from '../../components/Header.vue'
import { onMounted, reactive,toRefs } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
    components:{
        Header,
    },
    setup(){
        const router = useRouter()
        const store = useStore()
        const onAdd =  ()=>{
            router.push({
                path:'/addressedit',
                query:{
                    type:"add",
                }
            });
        }
        const onEdit = (item)=>{
            router.push({
                path:'/addressedit',
                query:{
                    id:item.id,
                    type:"edit",
                }
            });
        }
        const data = reactive({
            list:[],
        })
        const init = ()=>{
            data.list =store.state.userAddress.map(item=>{
                return {
                    id:item.id,
                    name:item.name,
                    tel:item.tel,
                    address:`${item.province}${item.city}${item.county}${item.addressDetail}`,
                    isDefault:item.isDefault,
                };
            });
        };
        onMounted(()=>{
            init();
        });
        return {
            onAdd,
            onEdit,
            ...toRefs(data),
        }
    }
}
</script>

<style scoped>
    :v-deep .van-button--primary {
        background-color: #ffc400;
        border-color: #ffc400;
    }
    :v-deep .van-switch-on {
        background-color: #ffc400;
    }
    :v-deep .van-radio_icon {
        display: none;
    }
</style>