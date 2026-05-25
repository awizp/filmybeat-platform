import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { MovieContext } from "../context/MovieContext";

const HighlightCard = () => {

    const { movies } = useContext(MovieContext);
    const [movieId, setMovieId] = useState(0);
    const navigate = useNavigate();
    const IMG_URL = import.meta.env.VITE_IMG_URL;
    const movie = movies[movieId];

    const genreMap = {
        28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime",
        99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History",
        27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance",
        878: "Science Fiction", 10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western"
    };

    useEffect(() => {
        const setRandomId = () => {
            const randomId = Math.floor(Math.random() * (movies.length > 0 && movies.length));
            setMovieId(randomId);
        };

        setRandomId();
    }, [movies.length]);

    return (
        <div className="w-full py-5">
            <div className="container w-full mx-auto px-3 md:px-0 relative">

                {
                    movies.length > 0 && (
                        <div className="p-3">
                            <div className="absolute top-0 left-0 w-full h-full -z-20">
                                <img
                                    src={movie.backdrop_path ? `${IMG_URL}${movie.backdrop_path}` : "/banner.png"}
                                    alt={movie.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="absolute top-0 left-0 w-full h-full bg-black -z-10 opacity-75"></div>

                            <div className="p-5 sm:p-10">
                                <div className="w-full md:w-xl lg:w-3xl space-y-10">
                                    <p className="font-oswald text-sm flex items-center gap-3 text-red-500">{new Date(movie.release_date).getFullYear()} | <span className="text-yellow-500"><ion-icon name="star"></ion-icon></span> {movie.vote_average.toFixed(2)}</p>

                                    <div className="space-y-3">
                                        <h2 className="font-limelight font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{movie.title}</h2>

                                        <p className="text-gray-400">{movie.overview}</p>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-3 font-oswald">
                                        {movie.genre_ids.map((g, idx) => (
                                            <span key={idx} className="p-1 bg-red-500 rounded text-sm font-semibold">{genreMap[g]}</span>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => navigate(`/movie/${movie.id}`)}
                                        className="bg-red-600 rounded-full w-fit hover:-translate-y-0.5 transition duration-300 hover:shadow-lg shadow cursor-pointer px-3 py-2 flex items-center gap-3 font-semibold font-oswald">
                                        Details <ion-icon name="information-circle"></ion-icon>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default HighlightCard;