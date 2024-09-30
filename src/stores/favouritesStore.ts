import {defineStore } from 'pinia';

import { ref, watch } from 'vue';


export const useFavouritesStore = defineStore('favourites', () => {

    const favourites = ref<Array<{ id: string; value: string}>>([]);





    // on store initialization load LocalStorage
    const loadFromlocalStorage = () => {
        const storedFavourites = localStorage.getItem('favouriteJokes');
        if (storedFavourites) {
            favourites.value = JSON.parse(storedFavourites);
        }
    }


    // Watch the array holder and save new jokes in localStorage
    watch(favourites, (newFavourites) => {
        localStorage.setItem('favouriteJokes', JSON.stringify(newFavourites));
    }, {deep: true});

    const addToFavourites = (joke: { id: string; value: string}) => {

        if (!favourites.value.some(fav => fav.id === joke.id)) {
            favourites.value.push(joke);
        }
    };

    const removeFromFavourites = (jokeId: string) => {
        const index = favourites.value.findIndex(fav => fav.id = jokeId);
        if (index !== -1){
            favourites.value.splice(index, 1);
        }
    };

    loadFromlocalStorage();

    return {
        favourites,
        addToFavourites,
        removeFromFavourites,
    }

});