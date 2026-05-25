import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';

import { MovieContext } from '../context/MovieContext';
import MovieCard from './MovieCard';
import HighlightCard from './HighlightCard';

const SearchList = ({ title }) => {

    const { movies, search, handleFetchMovies } = useContext(MovieContext);

    const navigate = useNavigate();

    useEffect(() => {
        document.title = `Search results for ${search} | FilmyBeat`;
    }, [search]);

    const handleBackNavigate = () => {
        handleFetchMovies("movie/now_playing");
        navigate("/");
    };

    return (
        <div className='w-full px-3 md:px-0 pb-5 pt-35 -translate-y-15 bg-black'>
            <div className='w-full container mx-auto space-y-8'>

                <button
                    className='border-2 border-red-500 rounded-full px-3 py-1.5 text-red-500 font-oswald cursor-pointer hover:shadow-lg flex items-center gap-1 hover:bg-gray-100/5'
                    onClick={handleBackNavigate}
                >
                    <ion-icon name="arrow-back"></ion-icon> Back
                </button>

                <h2 className='font-semibold font-oswald underline text-xl'>{title}{search}</h2>

                <div className='w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-10'>
                    {
                        movies.length > 0 &&
                        movies.slice(4, 8).map((movie, idx) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))
                    }
                </div>

                <HighlightCard />

                <div className='w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-10'>
                    {
                        movies.length > 0 &&
                        movies.slice(8,).map((movie, idx) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default SearchList;