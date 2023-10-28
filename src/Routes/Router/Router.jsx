import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Add from "../../add/Add";
import Gig from "../../gig/Gig";
import Gigs from "../../gigs/Gigs";
import Home from "../../home/Home";
import Login from "../../login/Login";
import MyGigs from "../../myGigs/MyGigs";
import Orders from "../../orders/Orders";
import Register from "../../register/Register";


const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/gigs",
                element:<Gigs></Gigs>
            },
            {
                path:"/gig",
                element:<Gig/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"/add",
                element:<Add/>
            },
            {
                path:"/orders",
                element:<Orders/>
            },
            {
                path:"/message",
                element:<Message/>
            },
            {
                path:"/messages",
                element:<Messages/>
            },
            {
                path:"/mygigs",
                element:<MyGigs/>
            },
        ]
       
    }
]);
export default router