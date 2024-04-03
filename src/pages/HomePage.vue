<script>
import axios from 'axios';
import ProjectsList from '../components/projects/ProjectsList.vue';
const defaultEndpoint = 'http://localhost:8000/api/projects/';


export default {
    name: 'HomePage',
    components: { ProjectsList },
    data: () => ({
        projects: []
    }),

    methods: {
        // Metodo per effettuare la chiamata API
        fetchProjects() {
            axios.get(defaultEndpoint).then((res) => {
                // console.log(res.data);

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

    <ProjectsList :projects="projects" />


</template>

<style></style>
