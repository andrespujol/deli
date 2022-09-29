import Vue from 'vue';
import VueRouter from 'vue-router';
import vueForm from 'vue-form';
import axios from 'axios';
// import vueAxios from 'vue-axios';
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueSimpleAlert from 'vue-simple-alert';
import router from './router/index';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(vueForm);
Vue.use(axios);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueSimpleAlert);

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
