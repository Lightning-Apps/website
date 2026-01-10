<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import appDatabase from '../backend/appDB2026.json'

const route = useRoute()
const app = computed(() => {
    const page = route.params.page || ""
    return appDatabase.find(entry => entry.page === page) || appDatabase[0]
})
</script>

<template>

    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    </head>



    <div class="px-4 py-5 my-5 text-center">
        <img class="d-block mx-auto mb-4" :src="app.iconPath" alt="app icon" width="72" height="72" style="border-radius: 16px;">
        <h1 class="display-5 fw-bold text-body-emphasis">{{ app.name }}</h1>
        <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">{{ app.description }}</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <a :href="app.url" target="_blank">
                    <button type="button" class="btn btn-primary btn-lg px-4 gap-3">{{ app.availability }}</button>
                </a>
                <button type="button" class="btn btn-outline-secondary btn-lg px-4 disabled">TestFlight</button>
            </div>
        </div>
    </div>


    <div v-if="app.images != []" class="container px-4 py-4 my-5" id="roadhousefinder-features">
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div v-for="image in app.images">
                <div class="feature col">
                    <div>
                        <img :src="image.path" class="col-6" style="border-radius: 16px;">
                    </div>
                    <h3 class="fs-2 text-body-emphasis mt-2">{{ image.title }}</h3>
                    <p>{{ image.description }}</p>
                </div>
            </div>
        </div>
    </div>


    <div v-if="app.introduction != ''" class="px-2 py-3 my-3">
        <div class="col-lg-6 mx-auto">
            <h4>What is it?</h4>
            <p>{{ app.introduction }}</p>
        </div>
    </div>



    <div v-if="app.launchInfo != ''" class="px-2 py-3 my-3">
        <div class="col-lg-6 mx-auto">
            <h4>When will it be available?</h4>
            <p>{{ app.launchInfo }}</p>
        </div>
    </div>



    <div v-if="app.platforms != []" class="px-2 py-3 my-3">
        <div class="col-lg-6 mx-auto">
            <h4>Supported platforms</h4>
            <table class="table table-light table-hover">
                <thead>
                    <tr>
                        <th scope="col">Platform</th>
                        <th scope="col">State</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="platform in app.platforms">
                        <th scope="row">{{ platform.platform }}</th>
                        <td>{{ platform.state }}</td>
                        <td>{{ platform.date }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <div v-if="app.subscriptionInfo != 'hide'">
        <div class="col-lg-6 mx-auto">
            <h4>Subscription</h4>
            <div v-if="!app.subscriptions.length" class="px-2 py-3 my-3">
                <p>{{ app.subscriptionInfo }}</p>
            </div>
        <div v-else class="px-2 py-3 my-3">
            <!-- <div class="col-lg-6 mx-auto">
                <h4>Subscription</h4> -->
                <table class="table table-light table-hover">
                    <thead>
                        <tr>
                            <th scope="row">Duration</th>
                            <th scope="row">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="subscription in app.subscriptions">
                            <td>{{ subscription.duration }}</td>
                            <td>{{ subscription.price }}</td>
                        </tr>
                    </tbody>
                </table>
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