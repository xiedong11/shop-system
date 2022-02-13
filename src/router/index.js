import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    // {path: '/', component: () => import(/* webpackChunkName: "channelList" */ '../views/activity')}, //首页
    {path: '/', component: () => import(/* webpackChunkName: "channelList" */ '../views/Login')}, //登录
    {path: '/Register', component: () => import(/* webpackChunkName: "channelList" */ '../views/Register')}, //注册
    {path: '/AddProduct', component: () => import(/* webpackChunkName: "channelList" */ '../views/AddProduct')}, //添加危化品
    {path: '/ProductList', component: () => import(/* webpackChunkName: "channelList" */ '../views/ProductList')}, //危化品列表
    {path: '/ProductDetail', component: () => import(/* webpackChunkName: "channelList" */ '../views/ProductDetail')}, //危化品详情
    {path: '/DataCount', component: () => import(/* webpackChunkName: "channelList" */ '../views/DataCount')}, //数据统计


    {path: '/SingUp', component: () => import(/* webpackChunkName: "channelList" */ '../components/SignUp')}, //频道页
    {path: '/MeetingDetail', component: () => import(/* webpackChunkName: "channelList" */ '../views/MeetingDetail')}, //活动详情
    {path: '/ApplyData', component: () => import(/* webpackChunkName: "channelList" */ '../views/ApplyData')}, //活动详情
    {path: '/PreviewApplyDetail', component: () => import(/* webpackChunkName: "channelList" */ '../views/PreviewApplyDetail')}, //预览报名详情

];

// {path:'/wap/detail/:classify/zx/:year/:date/866:id.shtml',component:NewsDetail,exact:true},
// {path:'/wap/detail/:classify/:channel/:year/:date/:id.shtml',component:NewsDetail},

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
