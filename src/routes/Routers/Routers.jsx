import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import Home from "../../components/Home/Home";
import Blog from "../../components/Blog/Blog";
import ViewDetails from "../../components/ViewDetails/ViewDetails";
import Spinner from "../../components/Spinner/Spinner";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=> fetch('http://localhost:5000/allData')
            },
            {
                path:'/allData/:id',
                element:<ViewDetails></ViewDetails>,
                loader : ({params})=> fetch(`http://localhost:5000/allData/${params.id}`)

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