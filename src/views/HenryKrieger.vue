<template>
    <div class="container py-4">
        <div class="row align-items-center g-4">
            <div class="col-12 col-md-4 text-center">
                <img src="/images/henrykrieger.png" alt="Henry Krieger" class="img-fluid rounded shadow-sm profile-img"
                    loading="lazy" />

                <div class="card mt-3">
                    <div class="card-body">
                        <ul class="list-unstyled mb-0">
                            <li class="mb-2 d-flex align-items-center">
                                <span class="me-2">🎂</span>22 years old
                            </li>
                            <li class="mb-2 d-flex align-items-center">
                                <span class="me-2">📍</span>Berlin, Deutschland
                            </li>
                            <li class="mb-2 d-flex align-items-center">
                                <span class="me-2">🎓</span>TU Berlin
                            </li>
                            <li class="d-flex align-items-center">
                                <span class="me-2">💻</span>Mobile & Web Development
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="col-12 col-md-8">
                <h1 class="h2 mb-1">Henry Krieger</h1>
                <p class="text-muted mb-3">Welcome to my personal space!</p>

                <div class="card mb-3">
                    <div class="card-body">
                        <h2 class="h5 card-title">About Me</h2>
                        <p class="card-text mb-0">
                            <!-- I'm a web developer passionate about creating beautiful and functional websites. -->
                            I'm a computer science student at TU Berlin. I love developing software, especially mobile
                            apps and web applications.
                        </p>
                    </div>
                </div>

                <div class="card mb-3">
                    <div class="card-body">
                        <h2 class="h5 card-title">Apps</h2>
                        <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3">
                            <div class="col" v-for="app in appDatabase" :key="app.id">
                                <div v-if="app.status != 'hide'" class="text-center">
                                    <RouterLink :to="app.page" class="d-block text-decoration-none text-body">
                                        <div class="d-flex align-items-center justify-content-center mb-2">
                                            <img :src="app.iconPath" :alt="app.name" class="img-fluid" width="70" height="70" style="border-radius: 16px;">
                                        </div>
                                        <small class="text-muted">{{ app.name }}</small>
                                    </RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card mb-3">
                    <div class="card-body">
                        <h2 class="h5 card-title">Links</h2>
                        <div class="d-flex flex-column flex-sm-row gap-2">
                            <a class="btn btn-outline-primary" href="https://github.com/realwarrior03" target="_blank"
                                rel="noopener noreferrer">
                                GitHub
                            </a>
                            <a class="btn btn-outline-info" href="https://linkedin.com/in/henrykrieger" target="_blank"
                                rel="noopener noreferrer">
                                LinkedIn
                            </a>
                            <a class="btn btn-outline-success" href="https://lightningapps.org" target="_blank"
                                rel="noopener noreferrer">
                                Portfolio
                            </a>
                        </div>
                    </div>
                </div>

                <div class="card mb-3">
                    <div class="card-body">
                        <h2 class="h5 card-title">Skills</h2>

                        <div class="row g-3">
                            <div v-for="skill in skills" :key="skill.name" class="col-12 col-sm-6">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <div class="d-flex align-items-center gap-2">
                                        <span class="badge bg-secondary rounded-pill">{{ skill.name }}</span>
                                        <small class="text-muted">{{ skill.category }}</small>
                                    </div>
                                    <span class="fw-semibold">{{ skill.level }}%</span>
                                </div>
                                <div class="progress" style="height:8px;">
                                    <div class="progress-bar" :class="getProgressBarColor(skill.level)"
                                        role="progressbar" :style="{ width: skill.level + '%' }"
                                        :aria-valuenow="skill.level" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-3">
                            <small class="text-muted">Weitere Tools: Git, NPM — flexibel einsetzbar.</small>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <footer class="text-center text-muted mt-4">
            <small>&copy; 2025 Henry Krieger</small>
        </footer>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import appDatabase from '../backend/appDB.json';
</script>

<script>
export default {
    name: 'HenryKrieger',
    data() {
        return {
            skills: [
                { name: 'Swift', level: 95, category: 'iOS Development' },
                { name: 'Python', level: 85, category: 'Scripting' },
                { name: 'Vue.js', level: 80, category: 'Framework' },
                { name: 'HTML', level: 80, category: 'Markup' },
                { name: 'CSS', level: 80, category: 'Styling' },
                { name: 'JavaScript', level: 85, category: 'DOM' },
                { name: 'Java', level: 50, category: 'Backend' },
                { name: 'C', level: 30, category: 'Programming' },
            ]
        }
    },
    methods: {
        getProgressBarColor(level) {
            if (level >= 90) return 'bg-success';
            if (level >= 70) return 'bg-info';
            if (level >= 50) return 'bg-warning';
            return 'bg-danger';
        }
    }
}
</script>

<style scoped>
.profile-img {
    max-width: 320px;
    width: 100%;
    height: auto;
    border-radius: 0.75rem;
}

@media (max-width: 576px) {
    .profile-img {
        max-width: 240px;
        margin: 0 auto;
    }
}
</style>