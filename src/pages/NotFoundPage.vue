<script>
export default {
    name: 'NotFoundPage',

};
</script>

<template>
    <div class="d-flex flex-column align-items-center justify-content-center" style=" height: calc(100vh - 60px);">
        <h3 class="text-white">404 | Page not found</h3>
        <RouterLink to="/">Torna alla Home</RouterLink>
        <a type="button" class="badge" @click="$router.back()">Torna indietro</a>
    </div>

</template>

<style></style>