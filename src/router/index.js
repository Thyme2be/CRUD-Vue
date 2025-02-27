import { createWebHistory, createRouter } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import JobView from "@/views/JobView.vue";
import AddJobView from "@/views/AddJobView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/jobs", name: "jobs", component: JobsView },
  { path: "/jobs/:id", name: "job", component: JobView },
  { path: "/jobs/add", name: "add-job", component: AddJobView },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
