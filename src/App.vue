<template>
  <div id="app">
    <header class="navbar navbar-expand-lg bg-light">
      <a href="/" class="navbar-brand">
        <img src="/src/assets/images/chuck-norris-100.png" alt="Logo" class="logo">
      </a>
      <div class="navbar-nav">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/jokes" class="nav-link">Jokes</router-link>
        <router-link to="/favourites" class="nav-link">Favourites</router-link>
      </div>
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      Chuck Norris memes app.
    </footer>

  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
};
</script>

<style lang="scss" scoped>
 @import '@/styles/App.scss';
</style>
