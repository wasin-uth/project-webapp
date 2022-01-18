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
    name: "404 is not found",
    path: "/error",
    component: () => import("../views/NotFound.vue"),
  },
  {
    name: "About",
    path: "/about",
    component: () => import("../views/About.vue"),
  },

  // =================================================
  // Collections Gallery
  {
    name: "Collections",
    path: "/collections",
    component: () =>
      import("../views/components/collections-gallery/Collections.vue"),
  },
  {
    name: "collections",
    path: "/collections/:id",
    component: () =>
      import("../views/components/collections-gallery/CollectionsDetails.vue"),
  },

  // =================================================
  // Contestants
  {
    name: "Contestants",
    path: "/contestants/:id",
    component: () => import("../views/components/Contestants.vue"),
  },
  {
    name: "Contestants Details",
    path: "/contestants/:id/details-:cid",
    component: () => import("../views/components/ContestantsDetails.vue"),
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
