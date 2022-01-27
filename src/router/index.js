import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { auth } from "../database/firebase.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    name: "About",
    path: "/about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/found",
    component: () => import("../views/NotFound.vue"),
  },

  // =================================================
  // Admin
  {
    name: "Admin",
    path: "/admins",
    component: () => import("../views/components/admin/index.vue"),
  },
  {
    path: "/admin/freshy-boy",
    component: () => import("../views/components/admin/DataTableFB.vue"),
  },
  {
    path: "/admin/freshy-girl",
    component: () => import("../views/components/admin/DataTableFG.vue"),
  },
  {
    path: "/admin/upload-collection",
    component: () => import("../views/components/admin/addCollections.vue"),
  },
  {
    path: "/admin/image-vote",
    component: () => import("../views/components/admin/imgVote.vue"),
  },
  {
    path: "/admin/contributor",
    component: () => import("../views/components/admin/Contributor.vue"),
  },
  {
    path: "/admin/upload-hall-of-fame",
    component: () => import("../views/components/admin/addHOF.vue"),
  },

  // =================================================
  // Collections Gallery
  {
    name: "Collections",
    path: "/Collections",
    component: () => import("../views/components/collections/Collections.vue"),
  },
  {
    name: "Collection",
    path: "/collection/:id",
    component: () => import("../views/components/collections/Collection.vue"),
  },

  // =================================================
  // Contestants
  {
    name: "Contestants",
    path: "/contestants/:id",
    component: () => import("../views/components/contestants/Contestants.vue"),
  },
  {
    path: "/contestants/:id/details-:cId=:Id",
    component: () => import("../views/components/contestants/ContDetails.vue"),
  },

  // =================================================
  // Hall Of Fame
  {
    name: "Hall Of Fame",
    path: "/hall-of-fame/:id",
    component: () => import("../views/components/HallOfFame.vue"),
  },

  // =================================================
  // Video
  {
    name: "Videos",
    path: "/videos",
    component: () => import("../views/components/Videos.vue"),
  },

  // =================================================
  // Vote
  {
    name: "Vote",
    path: "/vote",
    component: () => import("../views/components/votes/Vote.vue"),
  },
  {
    name: "Popular Vote",
    path: "/vote/popular-vote",
    component: () => import("../views/components/votes/PopularVote.vue"),
  },
  {
    name: "Vote by Students",
    path: "/vote/students-vote",
    component: () => import("../views/components/votes/StudentsVote.vue"),
    meta: { requiresAuth: true },
  },
  {
    name: "Login std",
    path: "/vote/login-for-students",
    component: () => import("../views/components/votes/login/LoginSTD.vue"),
  },
  {
    name: "Vote by Directors",
    path: "/vote/directors-vote",
    component: () => import("../views/components/votes/DirectorsVote.vue"),
    meta: { requiresAuth: true },
  },
  {
    name: "Login drt",
    path: "/vote/login-for-directors",
    component: () => import("../views/components/votes/login/LoginDRT.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// Firebase authentication
router.beforeEach((to, from, next) => {
  const authenticatedStd = auth.currentUser;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !authenticatedStd) {
    alert("Login to start voting");
    next("/vote/login-for-students");
  } else {
    next();
  }
});
export default router;
