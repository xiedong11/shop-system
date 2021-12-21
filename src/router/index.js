import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: () => import(/* webpackChunkName: "channelList" */ '../components/RegistrationInProgress') }, //首页
    { path: '/SingUp', component: () => import(/* webpackChunkName: "channelList" */ '../components/SignUp') }, //频道页

];

// {path:'/wap/detail/:classify/zx/:year/:date/866:id.shtml',component:NewsDetail,exact:true},
// {path:'/wap/detail/:classify/:channel/:year/:date/:id.shtml',component:NewsDetail},

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
