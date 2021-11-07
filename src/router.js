import { createRouter, createWebHistory } from "vue-router";
import AllBooksPage from "@/views/AllBooksPage.vue";
import AboutPage from "@/views/AboutPage.vue";
import BookmarksPage from "@/views/BookmarksPage.vue";

const routes = [
  {
    path: "/",
    name: "AllBooksPage",
    component: AllBooksPage,
  },
  {
    path: "/about-me",
    name: "AboutPage",
    component: AboutPage,
  },
  {
    path: "/bookmarks",
    name: "BookmarksPage",
    component: BookmarksPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
