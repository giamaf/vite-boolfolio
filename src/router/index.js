// Importo le funzioni di Vue Router
import { createRouter, createWebHistory } from "vue-router";

// Importo le pagine
import HomePage from '../components/pages/HomePage.vue';
import ContactUsPage from '../components/pages/ContactUsPage.vue';

// Definisco le rotte
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/contact-us', component: ContactUsPage },
    ]

})

export { router }