<script setup>
import appDatabase from '../backend/appDB.json';
</script>

<template>

    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    </head>



    <div class="px-4 py-5 my-5 text-center">
        <img class="d-block mx-auto mb-4" :src="appDatabase.find(entry => entry.id === 2).iconPath" alt="app icon" width="72" height="72" style="border-radius: 16px;">
        <h1 class="display-5 fw-bold text-body-emphasis">{{ appDatabase.find(entry => entry.id === 2).name }}</h1>
        <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">Digital companion for Trick Counting.</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <a :href="appDatabase.find(entry => entry.id === 2).url" target="_blank">
                    <button type="button" class="btn btn-primary btn-lg px-4 gap-3">App Store</button>
                </a>
                <button type="button" class="btn btn-outline-secondary btn-lg px-4 disabled">TestFlight</button>

                <!-- <button type="button" class="btn btn-lg px-4">
                    <img src="/public/images/Pre-order_on_the_App_Store_Badge_US-UK_RGB_blk_121217.svg">
                </button>
                <button type="button" class="btn btn-outline-secondary btn-lg px-4">
                    Test on TestFlight
                </button> -->
            </div>
        </div>
    </div>


    <!-- <br class="py-5"><br class="py-5"><br class="py-5"><br class="py-5"><br class="py-5"><br class="py-5"><br class="py-5"> -->
    <div class="container px-4 py-4 my-5" id="roadhousefinder-features">
        <!-- <h2 class="pb-2 border-bottom">Columns with icons</h2> -->
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div class="feature col">
                <div>
                    <img src="/images/tc_img1.png" class="col-6" style="border-radius: 16px;">
                </div>
                <h3 class="fs-2 text-body-emphasis mt-2">Easy to use</h3>
                <p>Effortlessly track each round of your game with a clean interface and intuitive flow — no learning curve needed.</p>
                <!-- <a href="#" class="icon-link">
                    Call to action
                    <svg class="bi">
                        <use xlink:href="#chevron-right"></use>
                    </svg>
                </a> -->
            </div>
            <div class="feature col">
                <!-- <div
                    class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                    <svg class="bi" width="1em" height="1em">
                        <use xlink:href="#people-circle"></use>
                    </svg>
                </div> -->
                <div>
                    <img src="/images/tc_img2.png" class="col-6" style="border-radius: 16px;">
                </div>
                <h3 class="fs-2 text-body-emphasis mt-2">Fully customizable</h3>
                <p>Add players, update scores, and control each round the way you play — flexibility built into every detail.</p>
                <!-- <a href="#" class="icon-link">
                    Call to action
                    <svg class="bi">
                        <use xlink:href="#chevron-right"></use>
                    </svg>
                </a> -->
            </div>
            <div class="feature col">
                <!-- <div
                    class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                    <svg class="bi" width="1em" height="1em">
                        <use xlink:href="#toggles2"></use>
                    </svg>
                </div> -->
                <div>
                    <img src="/images/tc_img3.png" class="col-6" style="border-radius: 16px;">
                </div>
                <h3 class="fs-2 text-body-emphasis mt-2">Statistics</h3>
                <p>View detailed summaries and visual charts to see who’s winning and how the game evolved over time.</p>
                <!-- <a href="#" class="icon-link">
                    Call to action
                    <svg class="bi">
                        <use xlink:href="#chevron-right"></use>
                    </svg>
                </a> -->
            </div>
        </div>
    </div>
    <!-- <div class="container px-4 py-5 my-5" id="roadhousefinder-features">
        <h2 class="pb-2 border-bottom">Apps</h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-md-2 row-cols-lg-3">
            <div class="feature col mb-3" v-for="app in appDatabase">
                <div v-if="app.status != 'hide'">
                    <div
                        class="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
                        <img :src="app.iconPath" class="bi" width="70m" height="70em" style="border-radius: 16px;">
                    </div>
                    <h3 class="fs-2 text-body-emphasis">{{ app.name }}</h3>
                    <p>{{ app.description }}</p>
                    <RouterLink class="btn btn-primary" :class="app.status" :to="app.page">{{ app.availability }}
                    </RouterLink>
                </div>
            </div>
        </div>
    </div> -->



    <div class="px-2 py-3 my-3">
        <div class="col-lg-6 mx-auto">
            <h4>What is it?</h4>
            <p>
                Trick Counting - Point Tracker is a digital companion designed to streamline the scoring process for the card game Trick Counting.
                Eliminating the need for paper and pencil, the app allows you to input the predictions and results for each round directly on your device.
                At the game's conclusion, it provides a comprehensive summary, detailing each player's placements and round-by-round performance.
                <!-- This tool enhances the gaming experience by offering an organized and efficient way to manage scores. -->
            </p>
        </div>
    </div>



    <div class="px-2 py-3 my-3">
        <div class="col-lg-6 mx-auto">
            <h4>When will it be available?</h4>
            <p>
                Right now on the iOS App Store!
                Click <a :href="appDatabase.find(entry => entry.id === 2).url" target="_blank">here</a> to download it right now.
            </p>
        </div>
    </div>



    <div class="px-2 py-3 my-3">
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
                    <tr>
                        <th scope="row">iOS</th>
                        <td>available</td>
                        <td>2022</td>
                    </tr>
                    <tr>
                        <th scope="row">iPadOS</th>
                        <th>available</th>
                        <th>2023</th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>



    <div class="px-2 py-3 my-3">
        <div class="col-lg-6 mx-auto">
            <h4>Subscriptions</h4>
            <p>
                This app is useable with a one-time purchase and will always be, enjoy!
                <br>
                Thank you to everybody who purchased the app for supporting me!!
                I appreciate it very much!
            </p>
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