import Home from "@pages/home-page";
import Login from "@pages/login";
import Profile from "@pages/profile";
import Register from "@pages/register";

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
]