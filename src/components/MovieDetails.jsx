import { useContext } from "react";
import { useNavigate, useParams } from "react-router";

import { MovieContext } from "../context/MovieContext";
import PageNotFound from "./PageNotFound";

const Hero = () => {

    const { movies } = useContext(MovieContext);
    const params = useParams();
    const navigate = useNavigate();
    const movie = movies.find((m) => m.id == params.id);
    const IMG_URL = import.meta.env.VITE_IMG_URL;

    const genreMap = {
        28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime",
        99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History",
        27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance",
        878: "Science Fiction", 10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western"
    };

    return (
        <section className="w-full pt-35 pb-10 px-3 md:px-0 relative text-white">
            {
                !movie ? <PageNotFound /> :
                    <>
                        <div className='w-full h-full flex flex-col justify-center items-center container mx-auto gap-5 z-20'>

                            <button
                                className='self-start mb-10 border-2 border-red-500 rounded-full px-3 py-1.5 text-red-500 font-oswald cursor-pointer hover:shadow-lg flex items-center gap-1 hover:bg-gray-100/5'
                                onClick={() => navigate(-1)}
                            >
                                <ion-icon name="arrow-back"></ion-icon> Back
                            </button>

                            <div className="w-full gap-15 z-20 flex flex-col md:flex-row-reverse items-center justify-center">
                                {/* movie details */}
                                {movies.length > 0 &&
                                    <div className="w-full space-y-5 p-5 relative">
                                        <h1 className="text-3xl sm:text-4xl font-bold font-limelight wrap-normal">{movie.title}</h1>

                                        <p className="text-gray-400 w-full sm:w-2xl">{movie.overview}</p>

                                        <p className="text-gray-500 text-sm font-semibold font-oswald">
                                            <span className="text-yellow-500 text-lg"><ion-icon name="star"></ion-icon></span> {movie.vote_average.toFixed(2)} | {movie.vote_count} reviews
                                        </p>

                                        <div
                                            className="flex flex-wrap items-center gap-3"
                                        >
                                            {movie.genre_ids.map((g, idx) => (
                                                <span key={idx}
                                                    className="bg-red-600 rounded-full w-fit hover:-translate-y-0.5 transition duration-300 shadow cursor-pointer px-3 py-1 flex items-center gap-3 font-semibold font-oswald text-sm"
                                                >{genreMap[g]}</span>
                                            ))}
                                        </div>
                                    </div>
                                }

                                {
                                    movies.length > 0 &&
                                    <div className="w-full sm:w-100 xl:w-105 h-125 overflow-hidden rounded-3xl border-2 border-white/5">
                                        <img
                                            src={movie.poster_path ? `${IMG_URL}${movie.poster_path}` : "/poster.png"}
                                            alt={movie.title}
                                            className="w-full h-full object-cover hover:scale-110 transition duration-300"
                                        />
                                    </div>
                                }
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
                        <div className="w-full h-full absolute top-0 left-0 bg-black backdrop-blur-xs opacity-90 -z-10"></div>
                    </>
            }
        </section>
    );
};

export default Hero;