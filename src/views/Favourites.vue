<template>
  <div class="favourites">
    <h2>Your Jokes Tuk!</h2>
    <div class="row mt-4">
      <div v-if="favourites.length === 0"> No favourite jokes have been selected</div>
      <div class="col-md-4" v-for="joke in favourites" :key="joke.id">
        <div class="card mb-3">
          <div class="card-body">
            <p class="card-text">{{ joke.value }}</p>
            <button class="btn btn-warning" @click="removeFromFavourites(joke.id)">Remove <i :class="'bi bi-star-fill'"></i> </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue';
import { useFavouritesStore } from '../stores/favouritesStore';

export default {
  name: 'Favourites',
  setup() {
    const favouritesStore = useFavouritesStore();
    // Use computed to watch the changes reactively
    const favourites = computed(() => favouritesStore.favourites);
    console.log(favouritesStore.favourites);

    return {
      favourites,
      removeFromFavourites: favouritesStore.removeFromFavourites,
    };
  }
};
</script>

<style lang="scss" scoped>
  @import '@/styles/Favourites.scss';
</style>
