<template>
    <div class="footer">
        <div class="item"><router-link to="/home" class="nav-item" active-class="nav-color"><van-icon name="wap-home-o" size="20" /><span style="text-align: center;font-size: 30px;">首页</span></router-link></div>
        <div class="item"><router-link to="/cart" class="nav-item" active-class="nav-color"><van-icon name="shopping-cart-o" size="20" /><span style="text-align: center;font-size: 30px;">购物车</span></router-link></div>
        <div class="item"><router-link to="/order" class="nav-item" active-class="nav-color"><van-icon name="balance-list-o" size="20" /><span style="text-align: center;font-size: 30px;">订单</span></router-link></div>
        <div class="item"><router-link to="/mine" class="nav-item" active-class="nav-color"><van-icon name="manager-o" size="20" /><span style="text-align: center;font-size: 30px;">我的</span></router-link></div>
    </div>
</template>

<style scoped>
    .footer {
        display: flex;
        background: #fff;
        border-top: 0.5px solid #eee;
        font-size: 6px;
    }
    .footer .item {
        flex: 1;
    }
    .footer .item .nav-item {
        display: flex;
        flex-flow: column;
        align-items: center;
        /* text-align: center; */
    }
    .footer .item .nav-color {
        color: #ffc400;
    }
</style>