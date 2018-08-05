

require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let Myheader=require('./components/header.vue');
let Myfooter=require('./components/footer.vue');

let Home=require('./components/home.vue');
let Blog=require('./components/blog.vue');
let Contact=require('./components/contact.vue');
let About=require('./components/about.vue');

const routes = [
  { path: '/home', component: Home },
  { path: '/blog', component: Blog },
   { path: '/contact', component: Contact },
  { path: '/about', component: About }

]


const router = new VueRouter({
	// mode:('history'),
  routes // short for `routes: routes`
})
const app = new Vue({
    el: '#app',
    router,
    components:{Myheader,Myfooter}
});
