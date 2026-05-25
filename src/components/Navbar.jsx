import { useContext } from "react";
import { useNavigate } from "react-router";

import { MovieContext } from "../context/MovieContext";
import { useState } from "react";

const Navbar = () => {

    const navigate = useNavigate();

    const { search, handleSearchMovies, apiPath } = useContext(MovieContext);

    const [searchValue, setSearchValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchValue == "") return;
        handleSearchMovies(searchValue.toLocaleLowerCase());
        navigate("/search");
        setSearchValue("");
    };

    return (
        <nav className='w-full px-3 md:px-0 py-5 absolute top-0 z-50 bg-transparent'>
            <div className='w-full container mx-auto flex justify-between items-center gap-5'>

                <div className='w-fit h-10 overflow-hidden'>
                    <img
                        src={"/logo.png"}
                        alt="FilmyBeat logo"
                        className='w-full h-full object-contain'
                    />
                </div>

                <form className='w-fit' onSubmit={(e) => handleSubmit(e)}>
                    <input
                        type="text"
                        placeholder='Search your movies'
                        className='px-3 py-1.5 rounded-lg focus:border-red-500 backdrop-blur-sm border-2 border-red-500/50 text-sm font-semibold outline-none'
                        name="search"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </form>

            </div>
        </nav>
    );
};

export default Navbar;