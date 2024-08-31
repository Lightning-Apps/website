<script setup>
import appDatabase from '../backend/appDB.json';
</script>

<template>

    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    </head>



    <div class="px-4 py-5 my-5 text-center">
        <img class="d-block mx-auto mb-4" src="/public/images/roadhousefinder_icon.png" alt="app icon" width="72" height="72" style="border-radius: 16px;">
        <h1 class="display-5 fw-bold text-body-emphasis">Roadhouse Finder</h1>
        <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s
                most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system,
                extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" class="btn btn-primary btn-lg px-4 gap-3 disabled">Launching 2025</button>
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
                    <img src="/public/images/rhf_img1.png" class="col-6" style="border-radius: 16px;">
                </div>
                <h3 class="fs-2 text-body-emphasis">Detailed map</h3>
                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence
                    and probably just keep going until we run out of words.</p>
                <a href="#" class="icon-link">
                    Call to action
                    <svg class="bi">
                        <use xlink:href="#chevron-right"></use>
                    </svg>
                </a>
            </div>
            <div class="feature col">
                <!-- <div
                    class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                    <svg class="bi" width="1em" height="1em">
                        <use xlink:href="#people-circle"></use>
                    </svg>
                </div> -->
                <div>
                    <img src="/public/images/rhf_img2.png" class="col-6" style="border-radius: 16px;">
                </div>
                <h3 class="fs-2 text-body-emphasis">Searchable</h3>
                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence
                    and probably just keep going until we run out of words.</p>
                <a href="#" class="icon-link">
                    Call to action
                    <svg class="bi">
                        <use xlink:href="#chevron-right"></use>
                    </svg>
                </a>
            </div>
            <div class="feature col">
                <!-- <div
                    class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                    <svg class="bi" width="1em" height="1em">
                        <use xlink:href="#toggles2"></use>
                    </svg>
                </div> -->
                <div>
                    <img src="/public/images/rhf_img3.png" class="col-6" style="border-radius: 16px;">
                </div>
                <h3 class="fs-2 text-body-emphasis">Categorized</h3>
                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence
                    and probably just keep going until we run out of words.</p>
                <a href="#" class="icon-link">
                    Call to action
                    <svg class="bi">
                        <use xlink:href="#chevron-right"></use>
                    </svg>
                </a>
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
                Roadhouse Finder is my all new app made for German highways. The idea: There are quite many roadhouses
                located at several highways with all kinds of restaurants, gas stations, cafés and more.
                But one thing is missing: knowing whats where. You may find a desired café on Maps, but that mostly just
                works for a specific search.
                Roadhouse Finder fixes exactly that problem. It's a map focussed on the German roadhouses and lets you
                find
                what you're looking for quickly.
            </p>
        </div>
    </div>



    <div class="px-2 py-3 my-3">
        <div class="col-lg-6 mx-auto">
            <h4>When will it be available?</h4>
            <p>
                At the moment, the progress on the app is slower than anticipated.
                I currently aim to release in Spring 2025, more on that in the future.
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
                        <td>under construction</td>
                        <td>2025</td>
                    </tr>
                    <tr>
                        <th scope="row">iPadOS</th>
                        <td>planned</td>
                        <td>tba</td>
                    </tr>
                    <tr>
                        <th scope="row">macOS</th>
                        <td>planned</td>
                        <td>tba</td>
                    </tr>
                    <tr>
                        <th scope="row">visionOS</th>
                        <td>planned</td>
                        <td>tba</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>



    <div class="px-2 py-3 my-3">
        <div class="col-lg-6 mx-auto">
            <h4>Subscriptions</h4>
            <table class="table table-light table-hover">
                <thead>
                    <tr>
                        <th scope="row">Duration</th>
                        <th scope="row">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ultra (Monthly)</td>
                        <td>6.99€</td>
                    </tr>
                    <tr>
                        <td>Pro (Weekly)</td>
                        <td>1.99€</td>
                    </tr>
                    <tr>
                        <td>Pro (Monthly)</td>
                        <td>3.99€</td>
                    </tr>
                    <tr>
                        <td>Pro (Annual)</td>
                        <td>34.99€</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>


    <!--
    <div class="row">
        <div class="col-6">
            <h4>Supported platforms</h4>
            <table class="table">
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
                        <td>under construction</td>
                        <td>2025</td>
                    </tr>
                    <tr>
                        <th scope="row">iPadOS</th>
                        <td>planned</td>
                        <td>tba</td>
                    </tr>
                    <tr>
                        <th scope="row">macOS</th>
                        <td>planned</td>
                        <td>tba</td>
                    </tr>
                    <tr>
                        <th scope="row">visionOS</th>
                        <td>planned</td>
                        <td>tba</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-6">
            <h4>Subscriptions (planned)</h4>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="row">Duration</th>
                        <th scope="row">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ultra (Monthly)</td>
                        <td>6.99€</td>
                    </tr>
                    <tr>
                        <td>Pro (Weekly)</td>
                        <td>1.99€</td>
                    </tr>
                    <tr>
                        <td>Pro (Monthly)</td>
                        <td>3.99€</td>
                    </tr>
                    <tr>
                        <td>Pro (Annual)</td>
                        <td>34.99€</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div> -->
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