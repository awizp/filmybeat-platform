import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";

import { MovieContext } from "../context/MovieContext";

const Hero = () => {

    const { movies } = useContext(MovieContext);
    const [movieId, setMovieId] = useState(0);
    const movie = movies[movieId];
    const IMG_URL = import.meta.env.VITE_IMG_URL;
    const navigate = useNavigate();

    return (
        <section className="w-full pt-35 px-3 md:px-0 relative text-white">
            <div className='w-full h-full flex justify-center items-center container mx-auto space-y-5 z-20'>

                <div className="w-full gap-15 z-20 flex flex-col items-start justify-center">
                    {/* movie details */}
                    {movies.length > 0 &&
                        <div className="w-full sm:w-2xl md:w-3xl p-2 md:p-5 space-y-5">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-limelight wrap-normal">{movie.title}</h1>

                            <p className="text-gray-400">{movie.overview}</p>

                            <p className="text-gray-500 text-sm font-semibold font-oswald">
                                <span className="text-yellow-500 text-lg"><ion-icon name="star"></ion-icon></span> {movie.vote_average.toFixed(2)} | {movie.vote_count} reviews
                            </p>

                            <button
                                onClick={() => navigate(`/movie/${movie.id}`)}
                                className="bg-red-600 mt-10 rounded-full w-fit hover:-translate-y-0.5 transition duration-300 hover:shadow-lg shadow cursor-pointer px-3 py-2 flex items-center gap-3 font-semibold font-oswald"
                            >
                                View details <ion-icon name="information-circle"></ion-icon>
                            </button>
                        </div>
                    }

                    {/* movie selection */}
                    <div className="w-fit backdrop-blur-md self-center rounded-3xl p-2 flex justify-center items-center gap-5">
                        {movies.length > 0 &&
                            movies.slice(0, 3).map((m, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setMovieId(idx)}
                                    className={`w-full md:w-45 md:h-65 rounded-2xl border-2 cursor-pointer overflow-hidden transition duration-300 ${movieId === idx && "scale-110 border-red-500"}`}>
                                    <img
                                        src={m.poster_path ? `${IMG_URL}${m.poster_path}` : "/poster.png"}
                                        alt={m.title}
                                        className="w-full h-full object-cover hover:scale-110 transition duration-300"
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>

            {movies.length > 0 &&
                <div className="absolute right-0 left-0 w-full h-full top-0 overflow-hidden -z-20">
                    <img
                        src={movie.backdrop_path ? `${IMG_URL}${movie.backdrop_path}` : "/banner.png"}
                        alt={movie.title}
                        className="w-full h-full object-cover"
                    />
                </div>}
            <div className="w-full h-full absolute top-0 left-0 bg-black opacity-80 -z-10"></div>
        </section>
    );
};

export default Hero;