import { createRouter,createWebHashHistory } from "vue-router";
import { showToast } from "vant";
const router = createRouter({
        history:createWebHashHistory(),
        routes:[
            {
                path:'/',
                component:()=>import('../views/home/Home.vue')
            },
            {
                path:'/home',
                component:()=>import('../views/home/Home.vue')
            },
            {
                path:'/cart',
                component:()=>import('../views/cart/Cart.vue'),
                meta:{
                    isAuth:true
                }
            },
            {
                path:'/mine',
                component:()=>import('../views/mine/Mine.vue'),
                meta:{
                    isAuth:true
                }
            },
            {
                path:'/order',
                component:()=>import('../views/order/Order.vue'),
                meta:{
                    isAuth:true
                }
            },
            {
                path:'/store',
                component:()=>import('../views/store/Store.vue')
            },
            {
                path:'/createorder',
                component:()=>import('../views/createorder/createOrder.vue'),
                meta:{
                    isAuth:true
                }
            },
            {
                path:'/address',
                component:()=>import('../views/address/Address.vue'),
                meta:{
                    isAuth:true
                }
            },
            {
                path:'/addressedit',
                component:()=>import('../views/addressEdit/addressEdit.vue')
            },
            {
                path:'/userinfoedit',
                component:()=>import('../views/userInfoEdit/userInfoEdit.vue'),
                meta:{
                    isAuth:true
                }
            },
            {
                path:'/login',
                component:()=>import('../views/login/Login.vue')
            },
            {
                path:'/regist',
                component:()=>import('../views/register/Regist.vue')
            },
        ]
})
//路由守卫、路由监听
router.beforeEach((to,from,next)=>{
    if(to.meta.isAuth === true) {
        //登录后会存储一个标识
        if(localStorage.isLogin === 'login'){
            next()
        }
        else {
            next('./login')
            showToast('请先去登录')

        }
    }
    else {
        next()
    }
})
export default router