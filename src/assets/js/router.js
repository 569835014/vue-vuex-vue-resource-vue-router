/**
 * Created by Administrator on 2016/12/5 0005.
 */
// import {Index,Home} from '../../view/'
export const routes=[
  {
    path: "/",
    component: require("../../view/Index.vue"),
    redirect: '/index',
    title:'首页',
    name:"index",
  },
  {
    path: "/index",
    component: require("../../view/Index.vue"),
    title:'首页',
    name:"index",
  },
  {
    path: "/home",
    component: require("../../view/Home.vue"),
    title:'home页',
    name:"home",
  }

];
