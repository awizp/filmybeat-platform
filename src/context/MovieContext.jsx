import { createContext, useEffect, useState } from "react";
import { fetchMovies } from "../utils/fetchMovies";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {

    const [movies, setMovies] = useState([]);
    const [apiPath, setApiPath] = useState('movie/now_playing');
    const [search, setSearch] = useState('');

    useEffect(() => {
        const setDataFunc = async () => {
            const data = await fetchMovies(apiPath, search);
            setMovies(data);
        };

        setDataFunc();
    }, [apiPath, search]);

    const handleFetchMovies = (pathValue) => {
        setSearch("");
        setApiPath(pathValue);
    };

    const handleSearchMovies = (searchTerm) => {
        setApiPath("search/movie");
        setSearch(searchTerm);
    };

    return (
        <MovieContext.Provider value={{ movies, apiPath, handleFetchMovies, handleSearchMovies, search }}>
            {children}
        </MovieContext.Provider>
    );
};

export { MovieContext, MovieProvider };