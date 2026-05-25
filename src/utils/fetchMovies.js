export const fetchMovies = async (apiPath, queryTerm = "") => {

    const TOKEN = import.meta.env.VITE_TMDB_TOKEN;
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const headers = {
        method: "GET",
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${TOKEN}`
        }
    };

    const url = `${BASE_URL}/${apiPath}?query=${queryTerm}`;

    let moviesData;

    try {
        const res = await fetch(url, headers);
        const data = await res.json();
        moviesData = data.results;
    } catch (error) {
        throw new Error("Failed to fetch movies from API", error);
    }

    return moviesData;
};