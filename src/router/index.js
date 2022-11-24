import { createRouter, createWebHistory } from "vue-router";
import QuizesViews from "../views/QuizesViews.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "quizes",
            component: QuizesViews,
        }
    ]
})

export default router;