import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import AvailableFood from "../Pages/Available_Food/AvailableFood";
import AddFood from "../Pages/AddFood/AddFood";
import ManageFood from "../Pages/Manage Food/ManageFood";
import FoodRequest from "../Pages/FoodRequest/FoodRequest";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import FoodDtls from "../Pages/FoodDtls/FoodDtls";
import PrivateRoutes from "./privateRoutes";




const router = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/availablefood',
                element:<AvailableFood></AvailableFood>
            },
            {
                path: '/addfood',
                element:<PrivateRoutes><AddFood></AddFood></PrivateRoutes>
            },
            {
                path: '/managefood',
                element:<PrivateRoutes><ManageFood></ManageFood></PrivateRoutes>
            },
            {
                path: '/foodrequest',
                element:<PrivateRoutes><FoodRequest></FoodRequest></PrivateRoutes>,
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path:'/foodsdetails/:id',
                element:<PrivateRoutes><FoodDtls></FoodDtls></PrivateRoutes>,
                loader:({params})=> fetch(`https://community-food-sharing-platfrom-server.vercel.app/${params.id}`)
            },
            
        ]

    }
])

export default router;