<script>
import axios from 'axios';
import ProjectCard from '../components/projects/ProjectCard.vue';
const defaultEndpoint = 'http://localhost:8000/api/projects/';

export default {
    name: 'ProjectDetailPage',
    components: { ProjectCard },
    data: () => ({
        project: null,
        isLoading: false,
    }),
    methods: {
        getProject() {
            this.isLoading = true;
            axios
                .get(`${defaultEndpoint}` + this.$route.params.slug)
                .then((res) => { this.project = res.data })
                .catch((err) => {
                    console.error(err)
                    this.$router.push({ name: 'not-found' })
                })
                .then(() => { this.isLoading = false })
        }
    },
    created() {
        this.getProject()
    }
};
</script>

<template>
    <h1 class="mt-3">Detail page</h1>

    <ProjectCard v-if="!isLoading && project" :project="project" :isDetail="true" />
</template>

<style></style>