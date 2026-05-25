import { useEffect, useContext } from 'react';

import { MovieContext } from '../context/MovieContext';
import MovieCard from './MovieCard';
import HighlightCard from './HighlightCard';

const MovieList = ({ title }) => {

    const { movies } = useContext(MovieContext);

    useEffect(() => {
        document.title = `${title !== "Now Playing" ?
            title + " | FilmyBeat" :
            "FilmyBeat | A organized movie listing platform using TMDB api"}`;
    }, [title]);

    return (
        <div className='w-full px-3 md:px-0 pb-5 pt-0'>
            <div className='w-full container mx-auto space-y-8'>

                <h2 className='font-semibold font-oswald underline text-xl'>{title}</h2>

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

export default MovieList;