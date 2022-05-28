import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "@/store";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    // 鉴权
    const status = store.getters["loginUser/status"];
    if (status === "loading") {
      // 进入loading组件
      next({
        path: '/loading',
        query: {
          returnurl: to.fullPath,
        }
      });
    } else if (status === "login") {
      // 已经登录，跳转目标页面
      next();
    } else {
      // 未登录，跳转登录页
      alert("该页面需要登录后访问");
      next({
        path: '/login',
        query: {
          returnurl: to.fullPath,
        }
      });
    }
    // console.log(status);
  } else {
    // 不需要鉴权
    next();
  }
});

export default router;
