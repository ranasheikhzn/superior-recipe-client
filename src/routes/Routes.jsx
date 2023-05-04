import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes/ChefRecipes";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://superior-recipe-server-ranasheikhzn.vercel.app/chefs')
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/chef-recipes/chef/:id',
                element: <PrivateRoute><ChefRecipes /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://superior-recipe-server-ranasheikhzn.vercel.app/chef-recipes/chef/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog />
            }
        ]
    }
])

export default router;