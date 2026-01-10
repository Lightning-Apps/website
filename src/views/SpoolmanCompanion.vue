<script setup>
import appDatabase from '../backend/appDB.json';
</script>

<template>

    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    </head>



    <div class="px-4 py-5 my-5 text-center">
        <img class="d-block mx-auto mb-4" :src="appDatabase.find(entry => entry.id === 4).iconPath" alt="app icon" width="72" height="72" style="border-radius: 16px;">
        <h1 class="display-5 fw-bold text-body-emphasis">{{ appDatabase.find(entry => entry.id === 4).name }}</h1>
        <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">Your companion app to manage your filament inventory from your iPhone.</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" class="btn btn-primary btn-lg px-4 gap-3 disabled">Launching 2026</button>
                <button type="button" class="btn btn-outline-secondary btn-lg px-4 disabled">TestFlight</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.appIcon {
    border-radius: 16%;
    width: 10%;
}

.py-20 {
    padding-top: 20rem;
    padding-bottom: 20rem;
}
</style>