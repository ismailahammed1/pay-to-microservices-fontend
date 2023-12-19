import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Pages/Layout/MainLayout";
import Pay from "../../Pages/Pay/Pay";
import Success from "../../Pages/Success";
import Add from "../../Pages/add/Add";
import Gig from "../../Pages/gig/Gig";
import Gigs from "../../Pages/gigs/Gigs";
import Home from "../../Pages/home/Home";
import Login from "../../Pages/login/Login";
import Message from "../../Pages/message/Message";
import Messages from "../../Pages/messages/Messages";
import MyGigs from "../../Pages/myGigs/MyGigs";
import Orders from "../../Pages/orders/Orders";
import Register from "../../Pages/register/Register";


const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/gigs",
                element:<Gigs></Gigs>
            },
            {
                path: "/gigs/gig/:id",
                element: <Gig />,
            },
            {
                path:"/message/:id",
                element: <Message/>,
            },
            {
                path:"/messages",
                element:<Messages/>
            },
            {
                path:"/register",
                element:<Register/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            
            {
                path:"/add",
                element:<Add/>
            },
            {
                path:"/mygigs",
                element:<MyGigs/>
            },
            {
                path:"/orders",
                element:<Orders/>
            },
            {
                path:"/pay/:id",
                element:<Pay/>
            },
            {
                path:"/success",
                element:<Success/>
            },
        ]
       
    }
]);
export default router