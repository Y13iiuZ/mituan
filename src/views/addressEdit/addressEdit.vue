<template>
    <div>
        <Header :title="address" />
        <van-address-edit
        :area-list="areaList"
        :address-info="addressInfo"
        show-delete
        show-set-default
        show-search-result
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        />
    </div>
</template>

<script>
import Header from '../../components/Header.vue'
import { computed, onMounted, reactive,toRefs } from 'vue'
import { useStore } from 'vuex';
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router';
import { showToast } from 'vant';
import {getApiAddressData}  from '../../api/api'
export default {
    components:{
        Header,
    },
    setup(){
        const router = useRouter()
        const route = useRoute()
        const store = useStore()
        const data = reactive({
            areaList:{},//省xx-市xx-区xx
            addressInfo:{},

        });
        const getAddressData = ()=>{
            getApiAddressData().then(res=>{
                // console.log(res);//测试
                data.areaList = res
            })
        }
        onMounted(()=>{
            getAddressData();
        })
        const onSave = (content)=>{
            if(route.query.type === "add"){
                store.commit('addaddress',content);
            }
            else {
                store.commit('editaddress',content);
            }
            showToast("保存成功")
            setTimeout(()=>{
                router.back()
            },1000);
        }
        const onDelete = (content)=>{
            store.commit('deleteaddress',content);
            showToast("删除成功")
            setTimeout(()=>{
                router.back()
            },1000);
        }
        const init = ()=>{
            store.state.userAddress.forEach((item) => {
                if(item.id === Number(route.query.id)){
                    data.addressInfo = item;
                }
            });
        }
        onMounted(()=>{
            init();
        })
        const address = computed(()=>{
            return route.query.type === 'add' ? "地址新增" : "地址编辑";
        })
        return {
            ...toRefs(data),
            onSave,
            onDelete,
            address,
        };
    },
};
</script>

<style scoped>
    :v-deep .van-button--primary {
        background-color: #ffc400;
        border-color: #ffc400;
    }
    :v-deep .van-switch--on {
        background-color: #ffc400;
    }
</style>