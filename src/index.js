import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

Vue.config.debug = true;//开启错误提示

// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 vue.use(vuerouter)

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Foo  = {template: '<div>foo</div>'};
const Bar  = {template: '<div>bar</div>'};
const Home = resolve => require(['./components/home'], resolve);

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    {path: '/foo', component: Foo},
    {path: '/bar', component: Bar},
    {path: '/home', component: Home}
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    mode  : 'history',
    routes: routes
});

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
    router  : router,
    template: `<div><h1>Hello App!</h1>
    <p>
<router-link to="/foo">Go to Foo</router-link>
<router-link to="/bar">Go to Bar</router-link>
<router-link to="/home">Go to Home</router-link>
</p>
<router-view></router-view></div>`
}).$mount('#app');

// new Vue({
//     el      : '#app',
//     template: `<div><h1>Hello App!</h1>
//     <p>
// <router-link to="/foo">Go to Foo</router-link>
// <router-link to="/bar">Go to Bar</router-link>
// </p>
// <router-view></router-view></div>`
// });

// 现在，应用已经启动了！