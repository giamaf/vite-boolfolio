<script>
export default {
    // Javascript Logic
    name: 'AppHeader'
};
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Portfolio</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <RouterLink class="nav-link active" aria-current="page" :to="{ name: 'Home' }">Home</RouterLink>
                        <RouterLink class="nav-link" :to="{ name: 'ContactUs' }">Contact Us</RouterLink>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped></style>
