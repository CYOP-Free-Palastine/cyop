import Home from "@pages/home-page";
import Register from "@pages/register";

export const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/register',
        element: <Register />
    }
]