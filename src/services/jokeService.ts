import axios from 'axios';

const BASE_URL = 'https://api.chucknorris.io/jokes';

export const getRandomJoke = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/random`);
        return response.data;
    } catch (error) {
        throw new Error('jokeService: getRandomJoke failed to get joke');
    }
}

export const getJokeByCategory = async (category: string) => {
    try {
        const response  = await axios.get(`${BASE_URL}/random`, {
            params: {category},
        });
        return response.data;
    } catch (error) {
        throw new Error ('jokeService: getRandomJokeCategory failed');
    }
}

export const getAllCategories = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/categories`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch categories');
    }
}



// Text search services

export const getSearchReuslt = async (word: string) => {
    try {

        // searchDirective for direct process of the input with reactive state
        //input validation required before requesting the data from the endpoint / REST
    } catch (error) {
        throw new Error ("jokeService:  getSearchResult error");
    }
}




// JSON RESPONSE Example 


// {
//     "icon_url" : "https://api.chucknorris.io/img/avatar/chuck-norris.png",
//     "id" : "dngfZnZ2Q0eFCgy3rO13eA",
//     "url" : "",
//     "value" : "Chuck Norris recently stated that cigars taste 'considerably better' when lit off of a flaming human corpse."
//     }

