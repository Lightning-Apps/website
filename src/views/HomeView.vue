import { RouterLink } from 'vue-router';
<template>
  <div class="container-fluid">
    <h1>Apps by Henry Krieger</h1>
    <div class="row">
      <div class="col-lg-4 col-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">University Wizard</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <!-- <a href="#" class="btn btn-primary">Free</a> -->
            <RouterLink class="btn btn-primary" to="/university-wizard">Free</RouterLink>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Trick Counting - Point Tracker</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <!-- <a href="#" class="btn btn-primary">4.99€</a> -->
            <RouterLink class="btn btn-primary" to="/trick-counting">4.99€</RouterLink>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">HLG-KAIFU App</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <!-- <a href="#" class="btn btn-primary">Free</a> -->
            <RouterLink class="btn btn-primary" to="/hlg-kaifu-app">Free</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>

  <br>

  <div class="container-fluid">
    <h1>Projects</h1>
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Serenity</h5>
            <p class="card-text">A python script enabling the usage of OpenAIs Dall-E via the API</p>
            <a class="btn btn-primary disabled" href="https://github.com/RealWarrior03/Serenity.git" target="_blank">Soon on GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
