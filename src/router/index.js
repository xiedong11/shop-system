import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    // { path: '/', component: () => import(/* webpackChunkName: "channelList" */ '../components/RegistrationInProgress') }, //首页

    // {path: '/', component: () => import(/* webpackChunkName: "channelList" */ '../views/activity')}, //首页
    {path: '/', component: () => import(/* webpackChunkName: "channelList" */ '../components/RegistrationSteps')}, //报名步骤
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
