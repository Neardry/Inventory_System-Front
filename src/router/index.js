import { createRouter, createWebHistory } from "vue-router";
import Login from "@/Pages/Login/login.vue";
import Home from "@/Pages/Home/home.vue"
import Register from "@/Pages/Register/register.vue";

const routes = [
    {path: "/login", component: Login}, {path: "/", redirect: "/login"},
    {path: "/home", component: Home},
    {path: "/register", component: Register}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router