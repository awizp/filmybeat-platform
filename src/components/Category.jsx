import { NavLink } from "react-router";
import { useContext } from "react";

import { MovieContext } from "../context/MovieContext";

const Category = () => {

    const { handleFetchMovies } = useContext(MovieContext);

    const categoryBtns = [
        {
            name: "Recently",
            icon: <ion-icon name="film"></ion-icon>,
            path: '/',
            apiPath: "movie/now_playing"
        },
        {
            name: "Trending",
            icon: <ion-icon name="trending-up"></ion-icon>,
            path: '/movies/popular',
            apiPath: "movie/popular"
        },
        {
            name: "Top rated",
            icon: <ion-icon name="flame"></ion-icon>,
            path: '/movies/top',
            apiPath: "movie/top_rated"
        },
        {
            name: "Upcoming",
            icon: <ion-icon name="cloud-upload"></ion-icon>,
            path: '/movies/upcoming',
            apiPath: "movie/upcoming"
        },
    ];

    return (
        <div className="w-full pt-45 px-3 md:px-0 -translate-y-15 bg-black">
            <div className='w-full container mx-auto'>

                <div className="flex flex-wrap gap-10 items-center w-full justify-center">
                    {
                        categoryBtns.map((c, idx) => (
                            <NavLink
                                to={c.path}
                                className="flex items-center gap-3 font-oswald hover:-translate-y-0.5 transition"
                                onClick={() => handleFetchMovies(c.apiPath)}
                                key={idx}
                            >
                                {c.icon} {c.name}
                            </NavLink>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default Category;