import { useNavigate } from "react-router";

const MovieCard = ({ movie }) => {

    const IMG_URL = import.meta.env.VITE_IMG_URL;
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/movie/${movie.id}`)}
            title={movie.title}
            className="w-full p-5 bg-transparent hover:-translate-y-0.5 transition duration-300 shadow hover:shadow-lg space-y-5 border border-gray-50/5 rounded-3xl">

            <div className="w-full overflow-hidden rounded-3xl">
                <img
                    src={movie.poster_path ? `${IMG_URL}${movie.poster_path}` : "/poster.png"}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="space-y-3">
                <h3 className="font-semibold truncate font-oswald">{movie.title}</h3>

                <div className="w-full flex justify-between items-center">
                    <p className="text-xs font-semibold text-gray-500">{new Date(movie.release_date).getFullYear()}</p>

                    <p className="text-gray-500 text-sm font-semibold flex items-center gap-3">
                        <span className="text-yellow-500 text-lg"><ion-icon name="star"></ion-icon></span> {movie.vote_average.toFixed(2)}
                    </p>
                </div>
            </div>

        </div>
    );
};

export default MovieCard;