import { RouterLink } from 'vue-router';

<template>
  <div class="about">
    <h1>Made with ❤️ in Berlin, Germany</h1>

    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          
        </div>
      </div>
    </div>
    <div class="list-group">
      <button type="button" class="list-group-item list-group-item-action" disabled>LinkedIn</button>
      <button type="button" class="list-group-item list-group-item-action" disabled>GitHub</button>
      <button type="button" class="list-group-item list-group-item-action" disabled>Instagram</button>
      <button type="button" class="list-group-item list-group-item-action" disabled>Twitter</button>
    </div>

    <ul class="list-group">
      <li class="list-group-item">
        <RouterLink to="">ToS</RouterLink>
      </li>
      <li class="list-group-item">
        <RouterLink to="">Privacy Policy</RouterLink>
      </li>
    </ul>
  </div>
</template>
