import Vue from 'vue';
import vueForm from 'vue-form';
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueSimpleAlert from 'vue-simple-alert';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(vueForm);
Vue.use(BootstrapVue);
Vue.use(VueSimpleAlert);

new Vue({
    render: (h) => h(App),
}).$mount('#app');
