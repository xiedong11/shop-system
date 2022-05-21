import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
// import store from './store'

import Vant from 'vant';

import 'vant/lib/index.css';

import axios from 'axios';

import VueAxios from 'vue-axios';


import i18n from './language/i18n'

const app = createApp(App);
app.use(i18n);


app.use(Vant);
// app.use(store);
app.use(router);

app.use(VueAxios, axios);

app.mount('#app')

