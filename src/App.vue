<script setup>
import { RouterLink, RouterView } from 'vue-router'
import appDatabase from '../src/backend/appDB2026.json'
</script>

<template>
  <header>
    <div class="container-fluid">
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <RouterLink to="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <img src="/favicon.ico" width="30rem">
          <span class="fs-4">Lightning Apps</span>
        </RouterLink>

        <ul class="nav nav-pills">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link" aria-current="page">Home</RouterLink>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Apps
            </a>
            <ul class="dropdown-menu">
              <h6 class="dropdown-header">Apps</h6>
              <div v-for="app in appDatabase">
                <li v-if="app.status != 'hide' && app.status != 'archive'">
                  <RouterLink class="dropdown-item" :class="app.status" :to="{ name: 'app', params: { page: app.page } }">{{ app.name }}</RouterLink>
                </li>
              </div>
              <div class="dropdown-divider"></div>
              <h6 class="dropdown-header">Archive</h6>
              <div v-for="app in appDatabase">
                <li v-if="app.status == 'archive'">
                  <RouterLink class="dropdown-item" :class="app.status" :to="{ name: 'app', params: { page: app.page } }">{{ app.name }}</RouterLink>
                </li>
              </div>
            </ul>
          </li>

          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">About</RouterLink>
          </li>
        </ul>
      </header>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  padding: 0rem 1rem;
}
</style>