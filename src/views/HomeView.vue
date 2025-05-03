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


    <!-- <div class="container px-4 py-5" id="hanging-icons">
      <h2 class="pb-2 border-bottom">Hanging icons</h2>
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="col d-flex align-items-start">
          <div
            class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <svg class="bi" width="1em" height="1em">
              <use xlink:href="#toggles2" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
              <path
                d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
            </svg>
          </div>
          <div>
            <h3 class="fs-2 text-body-emphasis">Serenity</h3>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and
              probably just keep going until we run out of words.</p>
            <a href="#" class="btn btn-primary">
              Primary button
            </a>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div
            class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <svg class="bi" width="1em" height="1em">
              <use xlink:href="#cpu-fill" />
            </svg>
          </div>
          <div>
            <h3 class="fs-2 text-body-emphasis">Featured title</h3>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and
              probably just keep going until we run out of words.</p>
            <a href="#" class="btn btn-primary">
              Primary button
            </a>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div
            class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <svg class="bi" width="1em" height="1em">
              <use xlink:href="#tools" />
            </svg>
          </div>
          <div>
            <h3 class="fs-2 text-body-emphasis">Featured title</h3>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and
              probably just keep going until we run out of words.</p>
            <a href="#" class="btn btn-primary">
              Primary button
            </a>
          </div>
        </div>
      </div>
    </div> -->
    <div class="container px-4 py-5" id="featured-projects">
      <h2 class="pb-2 border-bottom">Projects</h2>
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-2">
        <div class="feature col d-flex align-items-start" v-for="project in projectDatabase">
          <div v-if="project.status != 'hide'">
            <!-- <div class="feature-icon d-inline-flex align-items-center justify-content-cente bg-gradient fs-2 mb-3"> -->
            <!-- <div
              class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="bi bi-stars"
                viewBox="0 0 16 16">
                <path
                  d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
              </svg>
            </div> -->
            <div>
              <h3 class="fs-2 text-body-emphasis">{{ project.name }}</h3>
              <p>{{ project.description }}</p>
              <!-- <RouterLink class="btn btn-primary" :class="project.status" :to="project.page">{{ project.availability }}</RouterLink> -->
              <a :href="project.url" target="_blank">
                <button class="btn btn-primary" :class="project.status">
                  {{ project.availability }}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
