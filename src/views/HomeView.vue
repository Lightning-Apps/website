<script setup>
import appDatabase from '../../appDB.json';
</script>

<template>
  <div class="container-fluid">
    <h1>Apps</h1>
    <div class="row">
      <div class="col-lg-4 col-sm-6 col-12 mb-3" v-for="app in appDatabase">
        <div class="card" v-if="app.status != 'hide'">
          <img :src="app.iconPath" class="card-img-top" alt="app icon">
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
      <div class="col-12 mb-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Serenity</h5>
            <p class="card-text">A python script enabling the usage of OpenAIs Dall-E via the API</p>
            <a class="btn btn-primary disabled" href="https://github.com/RealWarrior03/Serenity.git" target="_blank">Soon on GitHub</a>
          </div>
          <div class="card-body">
            <h5 class="card-title">Equinox</h5>
            <p class="card-text">A simple webpage for keeping an overview of your certificate expiry dates.</p>
            <a class="btn btn-primary disabled" href="https://github.com/RealWarrior03/Equinox.git" target="_blank">Soon on GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
