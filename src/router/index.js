// Importo le funzioni di Vue Router
import { createRouter, createWebHistory } from "vue-router";

// Importo le pagine
import HomePage from '../components/pages/HomePage.vue';
import ContactUsPage from '../components/pages/ContactUsPage.vue';
import NotFoundPage from '../components/pages/NotFoundPage.vue';

// Definisco le rotte
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage, name: 'Home' },
        { path: '/contact-us', component: ContactUsPage, name: 'ContactUs' },
        // Qualunque path non incluso reindirizza alla HomePage anche se c'è qualcosa in query string
        { path: '/:pathMatch(.*)*', component: NotFoundPage, name: 'NotFound' }
    ]

})

export { router }