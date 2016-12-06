import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import MuseUi from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-components/styles/base.less'
import  Validate from './assets/js/validate'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import {rxUtils}  from './assets/js/rxUtils'
import {routes} from './assets/js/router'

/* eslint-disable no-new */
Vue.use(Vuex);
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Validate);
Vue.use(MuseUi);
rxUtils.setRem(15);
const router=new VueRouter({
  routes,
  mode: 'history'
});
router.beforeEach((to, from, next) => {
  // ...
  next();
});
router.afterEach(route => {
  // ...
});
const app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
