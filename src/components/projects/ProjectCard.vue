<script>
export default {
    // Javascript Logic
    name: 'ProjectCard',

    props: { project: Object, isDetail: Boolean },

    methods: {
        getFormatDate(param) {
            const date = new Date(param);

            let day = date.getDate();
            let month = date.getMonth() + 1;
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes();

            if (day < 10) day = '0' + day;
            if (month < 10) month = '0' + month;

            return `${day}/${month}/${year} alle ${hours}:${minutes}`;
        },

    }
};
</script>

<template>
    <div class="card">
        <div class="card-header">
            <h5 class="card-title m-0">{{ project.name }}</h5>
            <small class="little-font"><strong>Type: </strong></small>
            <RouterLink v-if="project.type" :to="{ name: 'type-projects', params: { slug: project.type.slug } }">
                <small class="card-title little-font m-0">
                    <span class="badge text-bg-info">{{ project.type.label }}</span></small><br>
            </RouterLink>

            <div v-if="project.technologies?.length">
                <strong class="little-font">Technology: </strong>
                <RouterLink v-for="technology in project.technologies" :key="technology.id"
                    :to="{ name: 'technology-projects', params: { slug: technology.slug } }">
                    <small class="card-title little-font m-0">
                        <span class="badge text-bg-secondary">{{ technology.label }}</span>
                    </small>
                </RouterLink>
            </div>

        </div>
        <div class="card-body clearfix">
            <img v-if="project.image" :src="project.image" class="card-img-top float-start" :alt="project.name">
            <p>{{ project.content }}</p>
        </div>
        <div class="card-footer little-font d-flex justify-content-between gap-2">
            <div class="d-flex gap-2">
                <small class="card-text"><strong>Created:</strong> {{ getFormatDate(project.created_at) }}</small>
                <small class="card-text"><strong>Updated:</strong> {{ getFormatDate(project.updated_at) }}</small>
            </div>
            <RouterLink v-if="!isDetail" :to="{ name: 'project-detail', params: { slug: project.slug } }">Details
            </RouterLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.little-font {
    font-size: 0.6rem;
}
</style>