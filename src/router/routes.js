const routes = [
  {
    path: "/",
    component: () => import("pages/HomePage.vue"),
  },
  {
    path: "/statement",
    name: "statement",
    component: () => import("pages/StatementPage.vue"),
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
