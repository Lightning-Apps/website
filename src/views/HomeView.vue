<script setup>
import appDatabase from '../backend/appDB.json';
import projectDatabase from '../backend/projectDB.json';
</script>

<template>
  <main>
    <div class="container px-4 py-5" id="featured-apps">
      <h2 class="pb-2 border-bottom">Apps</h2>
      <div class="row g-4 py-5 row-cols-1 row-cols-md-2 row-cols-lg-3">
        <div class="feature col mb-3" v-for="app in appDatabase">
          <div v-if="app.status != 'hide'">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
              <img :src="app.iconPath" class="bi" width="70m" height="70em" style="border-radius: 16px;">
            </div>
            <h3 class="fs-2 text-body-emphasis">{{ app.name }}</h3>
            <p>{{ app.description }}</p>
            <RouterLink class="btn btn-primary" :class="app.status" :to="app.page">{{ app.availability }}</RouterLink>
          </div>
        </div>
      </div>
    </div>

    <div class="container px-4 py-5" id="featured-projects">
      <h2 class="pb-2 border-bottom">Projects</h2>
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
        <div class="feature col" v-for="project in projectDatabase">
          <div v-if="project.status != 'hide'">
            <h3 class="fs-2 text-body-emphasis">{{ project.name }}</h3>
            <p>{{ project.description }}</p>
            <RouterLink class="btn btn-primary" :class="project.status" :to="project.page">{{ project.availability }}</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
