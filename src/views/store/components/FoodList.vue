<template>
    <div class="food-list" v-if="index === 0">
        <van-tree-select v-model:main-active-index="activeIndex" height="88vw" :items="items" @click-nav="navClick">
            <template #content>
                <div v-for="(item,index) in subItem" :key="index" class="item-bg">
                    <ListItem :item="item" :handleAdd="handleAdd" :handlecChange="handlecChange"></ListItem>
                </div>
            </template>
        </van-tree-select>
    </div>
    <div v-else>
        {{ foodData.content }}
    </div>
</template>

<script>
import {reactive,toRefs} from 'vue'
import ListItem from '../../../components/ListItem.vue'
export default {
    components:{
        ListItem,
    },
    props:["index","foodData"],
    setup(props){
        let data = reactive({
            activeIndex:0,
            items: [],
            subItem:[],
        });
        //初始化数据
        const initData = ()=>{
            let newArray = []
            //****************************细节来了**************************
            props.foodData?.items?.forEach((item,index) => {//?.->表示有才往后面走
                newArray.push({
                    text:item.text
                });
                if(data.activeIndex === index){
                        //指向最后一项
                    data.subItem = item.children;
                }
            })
            data.items = newArray;
        };
        initData();

        const navClick = (i)=>{
                data.activeIndex = i;
                initData();
        }
        const handleAdd = (id)=>{
                data.subItem.forEach((item,index)=>{
                    if(item.id === id){
                        item.add= false;
                        item.num+=1;
                    } 
                });
                
        };
        const handlecChange = (value,detail)=>{
                data.subItem.forEach(item=>{
                    if(item.id === detail.name){
                        item.num = value;
                    }
                });
                // console.log(data.subItem);//验证
        }
        return {
            ...toRefs(data),
            navClick,
            handleAdd,
            handlecChange,
        };
    },
};
</script>

<style scoped>
    .food-list {
        margin-top: 10px;
    }
    .food-list .item-bg {
        padding: 5px;
    }
    /* 深度作用域/deep/  */
    :v-deep .van-tree-select_item--active {
        color: #ffc400;
    }
    :v-deep .van-sidebar-item--select::before{
        background-color: #ffc400;
    }
</style>