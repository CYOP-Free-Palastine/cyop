import About from "@pages/about";
import Home from "@pages/home-page";
import Login from "@pages/login";
import Profile from "@pages/profile";
import Register from "@pages/register";
import Subscribes from "@pages/subscribes";
import Templates from "@pages/templates";

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
]