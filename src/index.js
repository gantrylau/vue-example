import Vue from 'vue'
import Home from './components/home'

Vue.config.debug = true;//开启错误提示
window.onload    = function () {
    new Vue({
        el        : '#app',
        components: {
            'my-component': Home
        }
    });
};