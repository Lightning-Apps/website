<script setup>
import appDatabase from '../backend/appDB.json';
</script>

<template>

    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    </head>



    <div class="px-4 py-5 my-5 text-center">
        <img class="d-block mx-auto mb-4" :src="appDatabase.find(entry => entry.id === 1).iconPath" alt="app icon" width="72" height="72" style="border-radius: 16px;">
        <h1 class="display-5 fw-bold text-body-emphasis">{{ appDatabase.find(entry => entry.id === 1).name }}</h1>
        <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">Manage your university life with ease.</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <a :href="appDatabase.find(entry => entry.id === 1).url" target="_blank">
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
                    <img src="/images/uw_img1.png" class="col-6" style="border-radius: 16px;">
                </div>
                <h3 class="fs-2 text-body-emphasis mt-2">Dashboard</h3>
                <p>All your essential university tools, links, and upcoming tasks in one central place — always up to date.</p>
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
                    <img src="/images/uw_img2.png" class="col-6" style="border-radius: 16px;">
                </div>
                <h3 class="fs-2 text-body-emphasis mt-2">Schedule</h3>
                <p>Stay organized with a clear weekly view of your lectures and easily manage your academic timetable.</p>
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
                    <img src="/images/uw_img3.png" class="col-6" style="border-radius: 16px;">
                </div>
                <h3 class="fs-2 text-body-emphasis mt-2">Assignments & exams</h3>
                <p>Track homework and exam deadlines at a glance so you never miss an important date again.</p>
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
                University Wizard is <b>your</b> assistant for managing university with ease. Keep track of your assignments
                as well as your exams. Notifications remind you before an assignment has to be submitted.
                <br><br>
                <b>NEW: with schedule you won't forget any lesson because the app remembers all lectures for you.</b>
            </p>
        </div>
    </div>



    <div class="px-2 py-3 my-3">
        <div class="col-lg-6 mx-auto">
            <h4>When will it be available?</h4>
            <p>
                Right now on the iOS App Store!
                Click <a :href="appDatabase.find(entry => entry.id === 1).url" target="_blank">here</a> to download it right now.
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
                </tbody>
            </table>
        </div>
    </div>



    <div class="px-2 py-3 my-3">
        <div class="col-lg-6 mx-auto">
            <h4>Subscriptions</h4>
            <p>This app is free to use and will always be, enjoy!</p>
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