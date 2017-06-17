import Home from "./Home/Home.vue"
import About from "./About/About.vue"

const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/contact1", component: { template: '<div class="contact">John : john.example@example</div>' } },
    { path: "/contact2", component: { template: '<div  class="contact">Ron : ron.example@example</div>' } },
    { path: "*", redirect: "/" }

]
export default routes