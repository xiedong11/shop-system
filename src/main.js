import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
// import store from './store'

import Vant from 'vant';

import 'vant/lib/index.css';

import axios from 'axios';

import VueAxios from 'vue-axios';

// import '../static/css/resetui.css';//vant重置UI样式


const app = createApp(App);
app.use(Vant);
// app.use(store);
app.use(router);

app.use(VueAxios, axios);

app.mount('#app')



// createApp(App).mount('#app')

