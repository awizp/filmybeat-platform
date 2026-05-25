import { Outlet, useLocation, matchPath } from "react-router";

import { Navbar, Hero, Footer, Category, ScrollToTop } from "../components";

const RootLayout = () => {

    const { pathname } = useLocation();

    const searchMatch = matchPath('/search', pathname);

    const detailsMatch = matchPath('/movie/:id', pathname);

    return (
        <div className="w-full relative">
            <ScrollToTop />
            <Navbar />
            {detailsMatch ? "" : <Hero />}
            {searchMatch || detailsMatch ? "" : <Category />}
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;