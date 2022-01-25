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
    path: "/gallery",
    component: () => import("../views/components/collections/Gallery.vue"),
  },
  {
    name: "Collection",
    path: "/collections/:id",
    component: () => import("../views/components/collections/Collections.vue"),
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
    id: "v",
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
