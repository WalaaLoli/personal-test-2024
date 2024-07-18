import { createRouter, createWebHistory } from "vue-router";
import About from "../components/AboutMe.vue";
import Experience from "../components/MyExpeience.vue";
import Education from "../components/MyEducation.vue";
import Skills from "../components/MySkills.vue";
import Languages from "../components/MyLanguages.vue";
import Contact from "../components/MyContact.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/about", component: About },
    { path: "/experience", component: Experience },
    { path: "/education", component: Education },
    { path: "/skills", component: Skills },
    { path: "/languages", component: Languages },
    { path: "/contact", component: Contact },
  ],
});

export default router;
