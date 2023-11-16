<template>
    <div class="mine">
        <Header title="我的"/>
        <div class="content">
            <div class="user-info">
                <div class="info">
                    <img src="../../assets/logo.png">
                    <div class="user-desc">
                        <span>昵称:{{ name }}</span>
                        <span class="name">个性签名:{{ describe }}</span>
                    </div>
                </div>
            </div>
            <ul class="user-list">
                <li class="van-hairline-bottom" @click="go('./order')">
                <span>我的订单</span>
                <van-icon name="arrow"/>
                </li>
                <li class="van-hairline-bottom" @click="go('./address')">
                <span>地址管理</span>
                <van-icon name="arrow"/>
                </li>
                <li class="van-hairline-bottom" @click="go('./userinfoedit')">
                <span>账号管理</span>
                <van-icon name="arrow"/>
                </li>
            </ul>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '../../components/Footer.vue'
import Header from '../../components/Header.vue';
import { reactive,toRefs } from 'vue';
import { useRouter } from 'vue-router';
    export default {
        components:{
            Footer,
            Header,
        },
        setup(){
            const router = useRouter()
            const data = reactive({
                describe:"永远爱湘湘!!!",
                name:"ztx",
            })
            const go = (path)=>{
                router.push(path);
            }
            return {
                ...toRefs(data),
                go,
            }
        }
    }
</script>

<style scoped>
    .mine {
        display: flex;
        flex-flow: column;
        height: 100%;
    }
    .mine .content {
        flex: 1;
        overflow-y: auto;
    }
    .mine .content .user-info {
        width: 94%;
        margin: 5px;
        height: 57px;
        background: linear-gradient(90deg,#ffc400,#c7c351);
        box-shadow: 0 2px 5px #ffc400;
        border-radius: 3px;
    }
    .mine .content .user-info .info {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        padding: 12px 10px;
        box-sizing: border-box;
    }
    .mine .content .user-info .info img {
        border-radius: 60%;
        margin-top: 1px;
    }
    .mine .content .user-info .info .user-desc {
        display: flex;
        flex-direction: column;
        margin-left: 5px;
        line-height: 18px;
        font-size: 8px;
        color: #fff;
    }
    .mine .content .user-info .info .user-desc .van-icon-setting-o {
        font-size: 8px;
        vertical-align: 2px;
        margin-right: 2px;
    }
    .mine .content .user-list {
        padding: 0 10px;
        margin-top: 10px;
        background-color: #fff;
    }
    .mine .content .user-list li {
        height: 20px;
        line-height: 20px;
        display: flex;
        justify-content: space-between;
        font-size: 7px;
    }
    .mine .content .user-list li .van-icon-arrow {
        margin-top: 6px;
    }
</style>