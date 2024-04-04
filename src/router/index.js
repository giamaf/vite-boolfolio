// Importo le funzioni di Vue Router
import { createRouter, createWebHistory } from "vue-router";

// Importo le pagine
import HomePage from '../pages/HomePage.vue';
import ContactUsPage from '../pages/ContactUsPage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';
import ProjectDetailPage from '../pages/ProjectDetailPage.vue';
import TypeProjectsPage from '../pages/TypeProjectsPage.vue';

// Definisco le rotte
const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes: [
        { path: '/home', component: HomePage, name: 'Home' },
        { path: '/projects/:slug', component: ProjectDetailPage, name: 'project-detail' },
        { path: '/types/:slug/projects', component: TypeProjectsPage, name: 'type-projects' },
        { path: '/contact-us', component: ContactUsPage, name: 'ContactUs' },
        { path: '/not-found', component: NotFoundPage, name: 'NotFound' },
        // Qualunque path non incluso reindirizza alla HomePage anche se c'è qualcosa in query string
        { path: '/:pathMatch(.*)*', redirect: 'not-found' }
    ]

})

export { router }