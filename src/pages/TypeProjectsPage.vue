<script>
import ProjectsList from '../components/projects/ProjectsList.vue';
import axios from 'axios';
const defaultEndpoint = 'http://localhost:8000/api/';
export default {
    name: 'TypeProjectsPage',
    components: { ProjectsList },
    data: () => ({
        projects: [],
        typeLabel: '',
        isLoading: false
    }),
    methods: {
        async fetchProjects() {
            this.isLoading = true;
            try {
                const res = await axios.get(defaultEndpoint + `types/${this.$route.params.slug}/projects`)
                const { projects, label } = res.data;
                this.projects = projects;
                this.typeLabel = label;
            } catch (err) {
                console.error(err);
                this.$router.push({ name: 'not-found' });
            }
            this.isLoading = false;
        }
    },
    created() {
        this.fetchProjects();
    }
}
</script>

<template>
    <h1 class="my-3">{{ typeLabel }} Projects</h1>
    <ProjectsList v-if="!isLoading" :projects="projects" />
</template>

<style>
/*Css*/
</style>