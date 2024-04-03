<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import HomePage from './pages/HomePage.vue';
import ContactUsPage from './pages/ContactUsPage.vue'
const defaultEndpoint = 'http://localhost:8000/api/projects/';


export default {
  name: 'Portfolio',
  components: { AppHeader, HomePage, ContactUsPage },

};
</script>

<template>
  <AppHeader />

  <main class="container">
    <RouterView />
  </main>

</template>

<style lang="scss">
@use 'assets/scss/style.scss';
</style>
