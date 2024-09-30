<template>
  <div class="jokes">
    <h2>Choose Category</h2>
    <select v-model="selectedCategory" @change="fetchJokes" class="form-select w-50 mx-auto">
      <option value="">Select Category</option>
      <option v-for="category in categories" :key="category" :value="category">
        {{ category }}
      </option>
    </select>

    <div class="joke-content mt-4">
      <p>{{ joke.value }}</p>
      <button class="btn btn-warning" @click="toggleFavourite(joke)">
        <i :class="isFavourite(joke.id) ? 'bi bi-star-fill' : 'bi bi-star'"></i>
      </button>
    </div>

    <button class="btn btn-primary mt-4" @click="getNewJoke">Get another one</button>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import { getRandomJoke, getJokeByCategory, getAllCategories } from '../services/jokeService';
import { useFavouritesStore } from '../stores/favouritesStore';

export default {
  name: 'Jokes',
  setup() {
    const selectedCategory = ref('');
    const joke = ref <any>({});
    const categories = ref<string[]>([]);
    const favouritesStore = useFavouritesStore();

    const fetchJokes = async () => {
      if (selectedCategory.value) {
        joke.value = await getJokeByCategory(selectedCategory.value);
      } else {
        joke.value = await getRandomJoke();
      }
    };

    const toggleFavourite = (joke: { id: string; value: string}) => {
      if (isFavourite(joke.id)){
        // delete by id
        favouritesStore.removeFromFavourites(joke.id);
      } else {
        // entire object require
        favouritesStore.addToFavourites(joke);
      }
    }

    const isFavourite = (jokeId: string) => {
      return favouritesStore.favourites.some(fav => fav.id === jokeId);
    };

    const getNewJoke = () => {
      fetchJokes();
    };

    const loadCategories = async () => {
      categories.value = await getAllCategories();
    };

    onMounted(() => {
      loadCategories();
      fetchJokes();
    });

    return {
      selectedCategory,
      joke,
      categories,
      fetchJokes,
      getNewJoke,
      toggleFavourite,
      isFavourite,
    };
  },
};
</script>

<style lang="scss" scoped>
  @import '@/styles/Jokes.scss';
</style>




