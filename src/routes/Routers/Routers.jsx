import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import Home from "../../components/Home/Home";
import Blog from "../../components/Blog/Blog";
import ViewDetails from "../../components/ViewDetails/ViewDetails";

import ErrorPage from "../../components/ErrorPage/ErrorPage";
import PrivetRoute from "../PrivetRoute";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=> fetch('https://assingment10-b7-server-project-deadless-programmer.vercel.app/allData')
            },
            {
                path:'/allData/:id',
                element: <PrivetRoute><ViewDetails></ViewDetails></PrivetRoute>,
                loader : ({params})=> fetch(`https://assingment10-b7-server-project-deadless-programmer.vercel.app/allData/${params.id}`)

            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:"/login",
                element:<SignIn></SignIn>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            // {
            //     path:'/loader',
            //     element:<Spinner></Spinner>
            // }
        ]
    }
]);
export default router;