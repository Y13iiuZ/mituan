<template>
    <Header title="账号管理"/>
    <div>
    <van-field v-model="name" label="昵称" placeholder="请输入昵称" />
    <van-field v-model="sign" label="个性签名" placeholder="请输入个性签名" disabled/>
    <van-field v-model="pwd" label="密码" placeholder="请输入密码" />
    <!--是否为圆角、块级,默认false-->
    <van-button type="primary" color="#ffc400" round block class="save-btn" @click="save">保存</van-button>
    <van-button type="primary" color="#ffc400" round block class="save-btn" @click="loginOut">退出登录</van-button>
    </div>
</template>

<script>
import Header from '../../components/Header.vue';
import { reactive, toRefs } from 'vue';
import { showToast } from 'vant';
import router from '../../router';
export default {
    components:{
        Header,
    },
    setup(){
        const data = reactive({
            name:"",
            sign:'love LX',
            pwd:''
        })
        const save = ()=>{
                if(data.name && data.pwd){
                    let userInfo  =  JSON.parse(localStorage.userInfo)
                    let newUserInfo = {
                        user:data.name || userInfo.name,
                        pwd:data.pwd || userInfo.pwd
                    };
                    localStorage.setItem('userInfo',JSON.stringify(newUserInfo));
                    showToast('修改成功')
                    router.push('/mine')
                }
                else {
                    showToast('请完善内容')
                }
        }
        const loginOut = ()=>{
            localStorage.removeItem('isLogin')
            router.push('/login')
            showToast('退出成功')
        }
        return {
            save,
            loginOut,
            ...toRefs(data),
        }
    }
}
</script>

<style scoped>
    :v-deep .van-button-primary {
        background-color: #ffc400;
        border-color: #ffc400;
    }
    .save-btn {
        width: 80%;
        margin: 10px auto;
    }
</style>