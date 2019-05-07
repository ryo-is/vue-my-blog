import Vue from "vue"
import Router from "vue-router"
import Home from "./views/home/Home.vue"
import Posts from "./views/posts/Posts.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/posts",
      component: Posts,
    }
  ],
})
