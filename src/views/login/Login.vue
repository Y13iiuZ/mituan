<template>
    <div class="login">
        <Header title="登录"/>
        <div class="img">米团</div>
        <van-form @submit="onSubmit">
        <van-cell-group inset>
            <van-field
            v-model="username"
            name="user"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
            v-model="password"
            type="password"
            name="pwd"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
            />
        </van-cell-group>
        <div style="margin: 16px;">
            <van-button round block type="success" native-type="submit">登录</van-button>
            <van-button round block type="danger" native-type="submit" @click="toRegister">去注册</van-button>
        </div>
        </van-form>
    </div>
</template>

<script>
import Header from '../../components/Header.vue'
import { useRouter } from 'vue-router'
import {reactive,toRefs} from 'vue'
import { showToast } from 'vant'
export default {
    components:{
        Header,
    },
    setup(){
        const data = reactive({
            username:"",
            password:""
        })
        const router = useRouter()
        const onSubmit = (value)=>{
            if(!localStorage.userInfo){
                showToast('账号未注册');
                return;
            }
            else{
                let userInfo = JSON.parse(localStorage.userInfo)
                if(userInfo['user']===value['user']){
                    if(userInfo['pwd']=== value['pwd']){
                        showToast('登陆成功')
                        localStorage.setItem('isLogin','login');
                        router.push('/')
                    }
                    else {
                        showToast('密码错误')
                    }
                }
                else {
                    showToast('账号不存在哈')
                }
            }
        }
        const toRegister = ()=>{
            router.push('/regist')
        }

        return {
            onSubmit,
            toRegister,
            ...toRefs(data),

        }
    }
}
</script>

<style scoped>
    .login .img {
        width: 100px;
        height: 100px;
        background-color: #ffc400;
        font-size: 40px;
        line-height: 100px;
        text-align: center;
        border-radius: 20px;
        margin: 10px auto;
    }
    .login .register {
        margin-top: 10px;
    }
</style>