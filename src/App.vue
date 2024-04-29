<script setup>
import { RouterLink, RouterView } from 'vue-router'
import appDatabase from '../appDB.json'
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
          <li class="nav-item">
            <RouterLink to="/news" class="nav-link">News</RouterLink>
          </li>
          <!-- <li class="nav-item">
            <RouterLink to="/features" class="nav-link disabled">Features</RouterLink>
          </li> -->
          <!-- <li class="nav-item">
            <RouterLink to="/pricing" class="nav-link disabled">Pricing</RouterLink>
          </li> -->
          <!-- <li class="nav-item">
            <RouterLink to="/faq" class="nav-link">FAQs</RouterLink>
          </li> -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Apps
            </a>
            <ul class="dropdown-menu">
              <div v-for="app in appDatabase">
                <li v-if="app.status != 'hide'">
                  <RouterLink class="dropdown-item disabled" :to="app.page" v-if="app.status == 'disabled'">{{ app.name
                    }}</RouterLink>
                  <RouterLink class="dropdown-item" :to="app.page" v-else="">{{ app.name }}</RouterLink>
                </li>
              </div>
              <!-- <hr>
              <li>
                <RouterLink class="dropdown-item" to="/university-wizard">University Wizard</RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item disabled" to="/roadhouse-finder">Roadhouse Finder</RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/trick-counting">Trick Counting - Point Tracker
                </RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item disabled" to="/replay">Replay (for Apple Music)</RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/hlg-kaifu-app">HLG-KAIFU App</RouterLink>
              </li> -->
            </ul>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">About</RouterLink>
          </li>
          <!-- <li class="nav-item">
            <RouterLink to="/downloads" class="nav-link">Downloads</RouterLink>
          </li> -->
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
<!-- <style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
