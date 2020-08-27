import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm'
import OrderList from './pages/orderList'
import OrderPayment from './pages/orderPayment'
import VerifyCodePay from './pages/verifyCodePay'
import Seller from './pages/seller'
import Management from './pages/management'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/index',
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: Index
                }, {
                    path: '/product/:id',
                    name: 'product',
                    component: Product
                }, {
                    path: '/detail/:id',
                    name: 'detail',
                    component: Detail
                }, {
                    path: '/seller',
                    name: 'seller',
                    component: Seller
                }, {
                    path: '/management',
                    name: 'management',
                    component: Management
                }
            ]
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        },
        {
            path: '/order',
            name: 'order',
            component: Order,
            children: [
                {
                    path: 'list',
                    name: 'order-list',
                    component: OrderList
                }, {
                    path: 'confirm',
                    name: 'order-confirm',
                    component: OrderConfirm
                }, {
                    path: 'payment',
                    name: 'order-payment',
                    component: OrderPayment
                }, {
                    path: 'verifyCodePay',
                    name: 'verify-code-pay',
                    component: VerifyCodePay
                }
            ]
        }
    ]
});