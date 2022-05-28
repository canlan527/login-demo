import Home from "@/views/Home";
import About from "@/views/About";
import Login from "@/views/Login";
import Profile from "@/views/Profile";
import Loading from "@/views/Loading";

export default [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/loading",
    name: "Loading",
    component: Loading,
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      auth: true, // 需要鉴权，已登录才可以访问
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      auth: true,
    },
  },
];
