<script setup>
import appDatabase from '../backend/appDB.json';
</script>

<template>

    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    </head>



    <div class="px-4 py-5 my-5 text-center">
        <img class="d-block mx-auto mb-4" :src="appDatabase.find(entry => entry.id === 3).iconPath" alt="app icon" width="72" height="72" style="border-radius: 16px;">
        <h1 class="display-5 fw-bold text-body-emphasis">{{ appDatabase.find(entry => entry.id === 3).name }}</h1>
        <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">Everything regarding HLG and KaiFU.</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <!-- <a :href="appDatabase.find(entry => entry.id === 3).url" target="_blank">
                    <button type="button" class="btn btn-primary btn-lg px-4 gap-3 disabled">App Store</button>
                </a>
                <button type="button" class="btn btn-outline-secondary btn-lg px-4 disabled">TestFlight</button> -->

                <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Deprecated</button>

                <!-- <button type="button" class="btn btn-lg px-4">
                    <img src="/public/images/Pre-order_on_the_App_Store_Badge_US-UK_RGB_blk_121217.svg">
                </button>
                <button type="button" class="btn btn-outline-secondary btn-lg px-4">
                    Test on TestFlight
                </button> -->
            </div>
        </div>
    </div>



    <div class="px-2 py-3 my-3">
        <div class="col-lg-6 mx-auto">
            <h4>What is it?</h4>
            <p>
                HLG-KAIFU App is a digital companion for everything regarding high school at HLG or KaiFU.
                Starting with the latest news from the websites to stay informed. Continuing with calculators for both school certificates as well as your high school diploma.
                Furthermore, the app offers a homework tracker so you won't forget any homework as it even reminds you in advance.
                <!--Trick Counting - Point Tracker is a digital companion designed to streamline the scoring process for the card game Trick Counting.
                Eliminating the need for paper and pencil, the app allows you to input the predictions and results for each round directly on your device.
                At the game's conclusion, it provides a comprehensive summary, detailing each player's placements and round-by-round performance.-->
                <!-- This tool enhances the gaming experience by offering an organized and efficient way to manage scores. -->
            </p>
        </div>
    </div>



    <div class="px-2 py-3 my-3">
        <div class="col-lg-6 mx-auto">
            <h4>When will it be available?</h4>
            <p>
                The app was available on the App Store between August 2021 and December 2024.
                <br>
                However, due to lack of maintenance, the app was flagged to be taken down by Apple.
                Over the years, our focus has shifted and therefor we have decided to <b>not</b> update the app.
                <br><br>
                <b>A big thank you to everybody, who used the app over the years! We hope it helped you during your time at school.</b>
                <br>
                For everybody who is interested in alternatives, I can highly recommend my other app <a :href="appDatabase.find(entry => entry.id === 1).url" target="_blank"><b>{{ appDatabase.find(entry => entry.id === 1).name }}</b></a>.
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
                        <td>launched</td>
                        <td>2022</td>
                    </tr>
                    <tr>
                        <th scope="row">iPadOS</th>
                        <th>launched</th>
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












<!-- <template>
    <h1>HLG-KAIFU App</h1>
    <img src="/images/hlgkaifu_icon.png" class="appIcon">
    <br><br>
    <a href="https://apps.apple.com/de/app/hlg-kaifu-app/id1579248887?l=en-GB" target="_blank"><img src="/images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"></a>
</template>

<style scoped>
.appIcon {
    border-radius: 16%;
    width: 30%;
    border: 1px solid gray;
}
</style> -->