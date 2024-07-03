import { RouterLink } from 'vue-router';

<template>
  <div class="about">
    <h2>Socials</h2>
    <div class="list-group">
      <a href="https://apps.apple.com/de/developer/henry-krieger/id1578245154" class="list-group-item list-group-item-action" target="_blank">App Store</a>
      <a href="https://github.com/lightning-apps" class="list-group-item list-group-item-action" target="_blank">GitHub</a>
      <!-- <a href="https://linkedin.com/in/henrykrieger" class="list-group-item list-group-item-action" target="_blank">LinkedIn</a> -->
      <!-- <a href="https://twitter.com/_hkrieger_" class="list-group-item list-group-item-action" target="_blank">Twitter</a> -->
    </div>

    <br>

    <h2>Team</h2>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3 col-6 mb-3">
          <div class="card">
            <img src="/images/henrykrieger.png">
            <div class="card-body">
              <h5 class="card-title">Henry Krieger</h5>
              <p class="card-text">CEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <img src="../assets/henrykrieger.png" class="rounded">
    <div class="list-group">
      <RouterLink to="" class="list-group-item list-group-item-action">Henry Krieger</RouterLink>
    </div> -->

    <br>

    <h2>Legal</h2>
    <ul class="list-group">
      <RouterLink to="" class="list-group-item list-group-item-action">ToS</RouterLink>
      <RouterLink to="" class="list-group-item list-group-item-action">Privacy Policy</RouterLink>
    </ul>

    <br><br>

    <h6>Made with ❤️ in Berlin, Germany</h6>
  </div>
</template>
