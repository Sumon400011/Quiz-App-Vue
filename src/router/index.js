import { createRouter, createWebHistory } from "vue-router";
import QuizesViews from "../views/QuizesViews.vue"
import QuizView from "../views/QuizView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "quizes",
            component: QuizesViews,
        },
        {
            path: "/quiz/:id",
            name: "quiz",
            component: QuizView,
        }
    ]
})

export default router;