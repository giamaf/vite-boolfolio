<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import HomePage from './components/pages/HomePage.vue';
import ContactUsPage from './components/pages/ContactUsPage.vue'
const defaultEndpoint = 'http://localhost:8000/api/projects/';


export default {
  name: 'Portfolio',
  components: { AppHeader, HomePage, ContactUsPage },

};
</script>

<template>
  <AppHeader />

  <main class="container">
    <HomePage />
    <ContactUsPage />
  </main>

</template>

<style lang="scss">
@use 'assets/scss/style.scss';
</style>
