import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vant from 'vant';
import 'vant/lib/index.css';
import service from "./http"


Vue.use(Vant);
Vue.use(ElementUI);
Vue.prototype.$axios = service
Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')