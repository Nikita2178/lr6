<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Система Замовлення Готелю</a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Головна</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/order">Замовлення</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/admin">Адміністратор</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Додайте окремий контейнер для основного контенту -->
    <div class="content-container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.navbar {
  text-align: left;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.content-container {
  max-width: 800px; /* Обмеження ширини для контенту */
  margin: 20px auto; /* Центрування контенту */
  padding: 20px;
}

h2 {
  text-align: left;
}
</style>
