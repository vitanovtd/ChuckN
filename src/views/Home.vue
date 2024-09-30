<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to the immortal hero Jokes page</h1>
        <p>Kvo stana za6to ne raboti kato horata sass</p>
        <button class="btn btn-primary mt-3" @click="navigateToJokes">Get Jokes</button>
      </div>
      <img src="../assets/images/chucklogo.jpg" alt="Hero Image" class="hero-image">
    </section>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Home',
  methods: {
    navigateToJokes() {
      this.$router.push('/jokes');
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '@/styles/Home.scss';
</style>
