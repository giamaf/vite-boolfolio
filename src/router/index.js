// Importo le funzioni di Vue Router
import { createRouter, createWebHistory } from "vue-router";

// Importo le pagine
import HomePage from '../components/pages/HomePage.vue';
import ContactUsPage from '../components/pages/ContactUsPage.vue';
import NotFoundPage from '../components/pages/NotFoundPage.vue';

// Definisco le rotte
const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes: [
        { path: '/', component: HomePage, name: 'Home' },
        { path: '/contact-us', component: ContactUsPage, name: 'ContactUs' },
        { path: '/not-found', component: NotFoundPage, name: 'NotFound' },
        // Qualunque path non incluso reindirizza alla HomePage anche se c'è qualcosa in query string
        { path: '/:pathMatch(.*)*', redirect: 'not-found' }
    ]

})

export { router }