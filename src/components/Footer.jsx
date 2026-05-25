import React from 'react';

const Footer = () => {
    return (
        <div className='w-full pt-8 pb-5 px-3 md:px-0'>
            <div className='w-full container mx-auto text-center'>

                <p className='text-gray-500 text-sm font-oswald font-semibold p-3'>
                    {new Date().getFullYear()} &copy; FilmyBeat - Crafted by <a href='https://www.linkedin.com/in/awizp/' className='hover:underline' target='_blank'>Vishnuprakash R.</a>
                </p>

            </div>
        </div>
    );
};

export default Footer;