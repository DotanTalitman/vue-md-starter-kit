import Vue from "vue";
import VueMaterial from "vue-material"
import VueRouter from "vue-router"
import App from "./App.vue";
import routes from "./routes";
import 'vue-material-css'
import mdTo from "vue-md-to"
Vue.use(mdTo);
Vue.use(VueRouter);
Vue.use(VueMaterial);


const router = new VueRouter({
    routes,
    mode: "history"
})

new Vue({
    el: "#app",
    router,
    render: h => h(App)
})