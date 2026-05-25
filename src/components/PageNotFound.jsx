import { useContext } from "react";
import { useNavigate } from "react-router";
import { MovieContext } from "../context/MovieContext";

const HighlightCard = () => {

    const { handleFetchMovies } = useContext(MovieContext);
    const navigate = useNavigate();

    const handleBackNavigate = () => {
        handleFetchMovies("movie/now_playing");
        navigate("/");
    };

    return (
        <div className="w-full h-screen py-5 relative">
            <div className="absolute top-0 left-0 w-full h-full -z-20">
                <img
                    src={"/not-found.jpg"}
                    alt={"Page not found image"}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="absolute top-0 left-0 w-full h-full bg-black backdrop-blur-xs -z-10 opacity-75"></div>

            <div className="container w-full h-full mx-auto px-3 md:px-0">

                <div className="w-full h-full flex flex-col justify-center items-center gap-10">

                    <p className="font-oswald text-2xl xs:text-3xl sm:text-4xl md:text-5xl">404 Page Not Found</p>

                    <button
                        className='border-2 border-red-500 rounded-full px-3 py-1.5 text-red-500 font-oswald cursor-pointer hover:shadow-lg flex items-center gap-1 hover:bg-gray-100/5'
                        onClick={handleBackNavigate}
                    >
                        <ion-icon name="arrow-back"></ion-icon> Back to Homepage
                    </button>

                </div>

            </div>
        </div>
    );
};

export default HighlightCard;