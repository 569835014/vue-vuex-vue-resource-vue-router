import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import {rxUtils}  from './assets/js/rxUtils'
import {routes} from './assets/js/router'
/* eslint-disable no-new */
Vue.use(Vuex);
Vue.use(VueResource);
Vue.use(VueRouter);
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
