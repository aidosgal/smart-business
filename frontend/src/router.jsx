import { createBrowserRouter } from "react-router-dom";
import Home from "./view/Home";
import Controller from "./view/Controller";
import AddController from "./view/AddController";
import Dashboard from "./view/Dashboard";
import Profile from "./view/Profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/switch/:id',
        element: <Controller/>
    },
    {
        path: '/addswitch/',
        element: <AddController/>
    },
    {
        path: '/dashboard',
        element: <Dashboard/>
    },
    {
        path: 'profile',
        element: <Profile/>
    }
])

export default router;
