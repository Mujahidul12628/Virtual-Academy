import {
    createBrowserRouter,
} from "react-router-dom";



import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Common/ErrorPage/ErrorPage";

import MainLayout from "../Common/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Class from "../Pages/Class/Class";
import ClassDetails from "../Pages/Class/ClassDetails";
import Instructor from "../Pages/Instructor/Instructor";
import InstructorDetails from "../Pages/Instructor/InstructorDetails";
import Blog from "../Pages/Blog/Blog";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [

            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: "/dashboard",
                element: <PrivateRoute><Dashboard></Dashboard> </PrivateRoute>,
            },
            {
                path: "/class",
                element: <PrivateRoute> <Class></Class> </PrivateRoute>
            },
            {
                path: '/class/:id',
                element: <ClassDetails></ClassDetails>
            },


            {
                path: "/instructor",
                element: <PrivateRoute><Instructor></Instructor></PrivateRoute>
            },
            {
                path: '/instructor/:id',
                element: <InstructorDetails></InstructorDetails>
            },

            {
                path: "blogs",
                element: <Blog></Blog>
            },
            // {
            //     path: "all-toys",
            //     element: <AllToys></AllToys>,
            //     loader: () => fetch('https://action-avenue-server.vercel.app/class')
            // },

            // {
            //     path: "add-toys",
            //     element: <PrivateRoutes><AddAToy></AddAToy></PrivateRoutes>
            // },
            // {
            //     path: "/view-details/:id",
            //     element: <PrivateRoutes> <ViewDetails></ViewDetails></PrivateRoutes>,
            //     loader: ({ params }) => fetch(`https://action-avenue-server.vercel.app/toy/${params.id}`)
            // }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
]);

export default router