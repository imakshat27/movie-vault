const API_KEY = "36e42f0c0ea4fc5b7aceab3d62a817a8"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};