import {createStore} from 'vuex'
import mutations from './mutations'
export default createStore({
    state:{
        cartList:[],//购物车的数据
        isDelete:true,//点击编辑，底部的组件展示
        edit:true,//默认展示编辑的状态
        orderList:[],
        userAddress:[
            {
                id:1,
                name:'张先生',
                tel:18381037727,
                province:"四川省",
                city:"成都市",
                county:"锦江区",
                addressDetail:"仁和新城",//写死了的，在组件上
                isDefault:true,
                areaCode:"110101"
            },
            {
                id:2,
                name:'李女士',
                tel:18780709739,
                province:"四川省",
                city:"南充市",
                county:"顺庆区",
                addressDetail:"心悦国际",
                isDefault:false,
                areaCode:"110201"
            },

        ],
        orderListEnd:[],
    },
    mutations,
    actions:{},
})