<script>
import ProjectCard from './ProjectCard.vue';

export default {
    // Javascript Logic
    name: 'ProjectsList',

    components: { ProjectCard },

    props: { projects: Array }
};
</script>

<template>
    <section id="project-list">

        <div class="row row-cols-1 row-cols-md-12 g-4">
            <div class="col" v-for="project in projects" :key="project.id">
                <ProjectCard :project="project" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
#project-list {
    margin: 24px 0;
}
</style>