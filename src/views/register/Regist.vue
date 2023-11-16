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
            <van-button round block type="danger" native-type="submit">注册</van-button>
            <van-button round block type="success" native-type="submit" @click="toLogin">去登录</van-button>
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
            // console.log(value);//测试获取用户和密码
            if(localStorage.userInfo){
                let userInfo = JSON.parse(localStorage.getItem('userInfo'))
                if(userInfo['user']===value['user']){
                    showToast('用户已存在');
                    return;
                }
            }
            else {
                register(value);
            }
        }
        const register = (value)=>{
            localStorage.setItem('userInfo',JSON.stringify(value));
            showToast('注册成功');
            router.push('/login')
        }
        const toLogin = ()=>{
            router.push('/login')
        }

        return {
            onSubmit,
            toLogin,
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