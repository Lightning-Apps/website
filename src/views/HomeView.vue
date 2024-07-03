<script setup>
import appDatabase from '../backend/appDB.json';
import projectDatabase from '../backend/projectDB.json';
</script>

<template>
  <main>
    <div class="container-fluid">
      <h1>Apps</h1>
      <div class="row">
        <div class="col-lg-3 col-sm-4 col-12 mb-3" v-for="app in appDatabase">
          <div class="card" v-if="app.status != 'hide'">
            <img :src="'../src/assets/' + app.iconPath" class="card-img-top" alt="app icon">
            <div class="card-body">
              <h5 class="card-title">{{ app.name }}</h5>
              <p class="card-text">{{ app.description }}</p>
              <div v-if="app.status == ''">
                <RouterLink class="btn btn-primary" :to="app.page">{{ app.availability }}</RouterLink>
              </div>
              <div v-else-if="app.status == 'disabled'">
                <RouterLink class="btn btn-primary disabled" :to="app.page">{{ app.availability }}</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br>

    <div class="container-fluid">
      <h1>Projects</h1>
      <div class="row">
        <div class="col-lg-6 col-12 mb-3" v-for="project in projectDatabase">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ project.name }}</h5>
              <p class="card-text">{{ project.description }}</p>
              <a class="btn btn-primary" :class="project.status" :href="project.url" target="_blank">{{ project.availability }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
