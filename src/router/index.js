import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    // {path: '/', component: () => import(/* webpackChunkName: "channelList" */ '../views/activity')}, //首页
    {path: '/', component: () => import(/* webpackChunkName: "channelList" */ '../views/Login')}, //登录
    {path: '/Register', component: () => import(/* webpackChunkName: "channelList" */ '../views/Register')}, //注册
    {path: '/AddGoods', component: () => import(/* webpackChunkName: "channelList" */ '../views/AddGoods')},
    {path: '/GoodsList', component: () => import(/* webpackChunkName: "channelList" */ '../views/GoodsList')},
    {path: '/RentHistory', component: () => import(/* webpackChunkName: "channelList" */ '../views/RentHistory')},
    {path: '/UserHome', component: () => import(/* webpackChunkName: "channelList" */ '../views/UserHome')},
    {path: '/GoodsDetail', component: () => import(/* webpackChunkName: "channelList" */ '../views/GoodsDetail')},
    {path: '/ChatRoom', component: () => import(/* webpackChunkName: "channelList" */ '../views/ChatRoom')},
    {path: '/DataCount', component: () => import(/* webpackChunkName: "channelList" */ '../views/admin/DataCount')},
    {path: '/UserList', component: () => import(/* webpackChunkName: "channelList" */ '../views/admin/UserList')},
    {path: '/AdminHome', component: () => import(/* webpackChunkName: "channelList" */ '../views/admin/AdminHome')},
    {path: '/ManageGoods', component: () => import(/* webpackChunkName: "channelList" */ '../views/admin/ManageGoods')},
    {path: '/FeedbackList', component: () => import(/* webpackChunkName: "channelList" */ '../views/admin/FeedbackList')},
    {path: '/CollectionList', component: () => import(/* webpackChunkName: "channelList" */ '../views/CollectionList')},
    {path: '/UpdateUserInfo', component: () => import(/* webpackChunkName: "channelList" */ '../views/UpdateUserInfo')},
    {path: '/SingleDataCount', component: () => import(/* webpackChunkName: "channelList" */ '../views/admin/SingleDataCount')},
];

// {path:'/wap/detail/:classify/zx/:year/:date/866:id.shtml',component:NewsDetail,exact:true},
// {path:'/wap/detail/:classify/:channel/:year/:date/:id.shtml',component:NewsDetail},

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
