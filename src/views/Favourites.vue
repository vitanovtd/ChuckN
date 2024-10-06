<template>
  <div class="favourites">
    <h2>Your Jokes Tuk!</h2>
    <div class="row">
      <div v-if="favourites.length === 0">
        No favourite jokes have been selected
      </div>
      <div
        class="col-sm-6 col-md-4 col-lg-3 mb-4"
        v-for="joke in favourites"
        :key="joke.id"
      >
        <div class="card h-100">
          <div class="card-body d-flex flex-column justify-content-between">
            <router-link
              :to="`/jokes/${joke.id}`"
              class="card-text text-decoration-none text-dark mb-3"
            >
              {{
                joke.value.length > 100
                  ? joke.value.substring(0, 100) + "..."
                  : joke.value
              }}
            </router-link>
            <button
              class="btn btn-warning mt-auto remove-button"
              @click="removeFromFavourites(joke.id)"
            >
              Remove <i class="bi bi-star-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import { useFavouritesStore } from "../stores/favouritesStore";

export default {
  name: "Favourites",
  setup() {
    const favouritesStore = useFavouritesStore();
    const favourites = computed(() => favouritesStore.favourites);

    return {
      favourites,
      removeFromFavourites: favouritesStore.removeFromFavourites,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/Favourites.scss";
</style>
