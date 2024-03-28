<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import ProjectsList from './components/projects/ProjectsList.vue';
const defaultEndpoint = 'http://localhost:8000/api/projects/';


export default {
  name: 'Portfolio',
  components: { AppHeader, ProjectsList },
  data: () => ({
    projects: []
  }),

  methods: {
    // Metodo per effettuare la chiamata API
    fetchProjects() {
      axios.get(defaultEndpoint).then((res) => {
        console.log(res.data);

        // Inserisco i dati della chiamata nel mio array projects
        this.projects = res.data;
      })
    }
  },

  created() {
    // Alla creazione effettuo la chiamata API
    this.fetchProjects();
  }
};
</script>

<template>
  <AppHeader />

  <main class="container">
    <ProjectsList :projects="projects" />

  </main>

</template>

<style lang="scss">
@use 'assets/scss/style.scss';
</style>
