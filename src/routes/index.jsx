import About from "@pages/about";
import Home from "@pages/home-page";
import Login from "@pages/login";
import Profile from "@pages/profile";
import Register from "@pages/register";
import Subscribes from "@pages/subscribes";
import Templates from "@pages/templates";
import Brutalist from "cyop-portfolios/brutalist";
import Retro from "cyop-portfolios/retro";

export const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/profile',
        element: <Profile />
    },
    {
        path: '/subscribes',
        element: <Subscribes />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/templates',
        element: <Templates />
    },
    {
        path: '/templates/brutalist',
        element: <Brutalist />
    },
    {
        path: '/templates/retro',
        element: <Retro />
    },
]