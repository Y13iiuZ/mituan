<template>
    <div class="home">
        <div class="content">
            <div class="header">
                <div class="text">外卖</div>
                <div class="location">
                    <van-icon name="location-o" /><span>成都</span><van-icon name="arrow" />
                </div>
            </div>
            <div class="main">
                <div class="main-bg">
                    <div class="search">
                        <input type="text">
                        <div class="search-text">搜索</div>
                    </div>
                    <div class="sort">
                        <div class="big-sort">
                            <div v-for="(s,index) in big_sort" :key="index">
                                <!--********************循环遍历!!!******************-->
                                <svg class="icon" aria-hidden="true"><use :xlink:href="`#${s.icon}`"></use></svg>{{ s.name }}
                            </div>
                        </div>
                        <div class="small-sort">
                            <div v-for="(ss,indexs) in small_sort" :key="indexs">
                                <!--********************循环遍历!!!******************-->
                                <svg class="icon" aria-hidden="true"><use :xlink:href="`#${ss.icon}`"></use></svg>{{ ss.name }}
                            </div>
                        </div>
                    </div>
                </div>
                <van-tabs v-model:active="active" class="vantab">
                <van-tab  v-for="(sss,index) in cententnav_list" :title="sss.tab" :key="index">
                <lists :navinfo="sss.data"></lists>
                </van-tab>
                </van-tabs>
                </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import { reactive,toRefs,ref, onMounted } from 'vue'
import Footer from '../../components/Footer.vue'
import lists from './components/navList.vue'
// import axios from 'axios'
//二次封装的数据
import {getApiHomeData} from '../../api/api.js'
    export default {
        components:{
            Footer,
            lists
        },
        setup(){
            let data = reactive({
                /***  接口api获取  ***/
                big_sort:[],
                small_sort:[],
                cententnav_list:[]
            })
            const active = ref(0);
            const getHomeData = ()=>{
                getApiHomeData().then(res=>{
                    // console.log(res);//数据
                    data.big_sort = res.big_sort
                    data.small_sort = res.small_sort
                    data.cententnav_list = res.cententnav_list
                })
                // axios.get('/home/getHomeData').then(res=>{
                //     // console.log(res)//测试
                //     // console.log(res.data)//测试
                //     const {code,data} = res.data;
                //     if(code==200){
                //         datas.big_sort = data.big_sort
                //         datas.small_sort = data.small_sort
                //         datas.cententnav_list = data.cententnav_list
                //     }
                // })
            }
            onMounted(()=>{
                getHomeData();
            })
            return {
                ...toRefs(data),
                active,
            };
        },
    }
</script>

<style scoped>
    .home {
        display: flex;
        flex-flow: column;
        height: 100%;
        font-size: 6px;
    }
    .home .content {
        flex: 1;
        overflow-y: auto;
    }
    .home .content .header {
        background-image: linear-gradient(#ffc400,#fff);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 10px 20px 10px;
    }
    .home .content .header .text {
        font-size: 10px;
        font-weight: 600;
    }
    .home .content .header .location {
        margin: 0;
        font-size: 10px;
    }
    .home .content .main {
        margin-top: -10px;
    }
    .home .content .main .main-bg {
        background-image: linear-gradient(#fff,#f5f5f5);
        padding: 2px 5px 0 1px;
        border-radius: 5px 5px 0 0;
    }
    .home .content .main .main-bg .search {
        position: relative;
    }
    .home .content .main .main-bg .search input {
        width: 100%;
        border: 1px solid #ffc400;
        border-radius: 10px;
        height: 20px;
    }
    .home .content .main .main-bg .search .search-text {
        position: absolute;
        right: -2.8px;
        top: 1.1px;
        background-color: #ffc400;
        border-radius: 10px;
        width: 50px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        font-size: 10x;
    }
    .home .content .main .main-bg .sort {
        padding: 5px 0;
    }
    .home .content .main .main-bg .sort .big-sort {
        display: flex;
    }
    .home .content .main .main-bg .sort .big-sort div {
        flex: 1;
        display: flex;
        /** 通用模板三句诗->  **/
        justify-content: center;
        flex-flow: column;
        align-items: center;
    }
    .home .content .main .main-bg .sort .big-sort div .icon {
        width: 20px;
        height: 20px;
        margin-bottom: 2px;
    }
    .home .content .main .main-bg .sort .small-sort {
        display: flex;
        flex-wrap: wrap;
        margin-top: 8px;
    }
    .home .content .main .main-bg .sort .small-sort div {
        display: flex;
        justify-content: center;
        flex-flow: column;
        align-items: center;
        width: 20%;
    }
    .home .content .main .main-bg .sort .small-sort div .icon {
        width: 15px;
        height: 15px;
        margin: 5px;
    }
    .home .content .main .vantab {
        padding: 0 10px 5px;
    }
:v-deep .van-tabs__wrap {
    border-radius: 10px;
}
</style>