/*
* @Author: Administrator
* @Date:   2017-03-16 20:34:59
* @Last Modified by:   Administrator
* @Last Modified time: 2017-03-18 14:31:40
*/ 

'use strict';
import Vue from 'vue';
import App from './App.vue';
import css from './common.css';

import rank from './src/components/rank/rank.vue';
import collection from './src/components/collection/collection.vue';
import recommend from './src/components/recommend/recommend.vue';

 
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';


Vue.use(VueRouter);
Vue.use(VueResource);



const vuerouter = new VueRouter({
	routes: [{
		path: '/rank',
		component: rank
	},{
		path: '/collection',
		component: collection 
	},{
		path: '/recommend',
		component: recommend
	},{
		path: '/',
		redirect: '/rank'
	}]
})
const app = new Vue({
	el: '#app',
	render: c => c(App),
	router: vuerouter
})