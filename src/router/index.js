import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

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
    name: "404 is not found",
    path: "/error",
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
    path: "/admin/image-show",
    component: () => import("../views/components/admin/imgShow.vue"),
  },
  {
    path: "/admin/image-vote",
    component: () => import("../views/components/admin/imgVote.vue"),
  },
  {
    path: "/admin/upload-collection",
    component: () => import("../views/components/admin/addCollections.vue"),
  },
  {
    path: "/admin/upload-hall-of-fame",
    component: () => import("../views/components/admin/addHOF.vue"),
  },

  // =================================================
  // Collections Gallery
  {
    name: "Gallery",
    path: "/gallery",
    component: () => import("../views/components/collections/Gallery.vue"),
  },
  {
    name: "Collections",
    path: "/collections/:id",
    component: () => import("../views/components/collections/Collections.vue"),
  },

  // =================================================
  // Contestants
  {
    name: "2017",
    path: "/contestants/2017",
    component: () => import("../views/components/contestants/2017.vue"),
  },
  {
    name: "2018",
    path: "/contestants/2018",
    component: () => import("../views/components/contestants/2018.vue"),
  },
  {
    name: "2019",
    path: "/contestants/2019",
    component: () => import("../views/components/contestants/2019.vue"),
  },
  {
    name: "2020",
    path: "/contestants/2020",
    component: () => import("../views/components/contestants/2020.vue"),
  },
  {
    name: "Contestants Details",
    path: "/contestants/:id/details-:cid",
    component: () =>
      import("../views/components/contestants/ContestantsDetails.vue"),
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
  },
  {
    name: "Vote by Directors",
    path: "/vote/directors-vote",
    component: () => import("../views/components/votes/DirectorsVote.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
