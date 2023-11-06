import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import AvailableFood from "../Pages/Available_Food/AvailableFood";
import AddFood from "../Pages/AddFood/AddFood";
import ManageFood from "../Pages/Manage Food/ManageFood";
import FoodRequest from "../Pages/FoodRequest/FoodRequest";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";



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
                element:<AddFood></AddFood>
            },
            {
                path: '/managefood',
                element:<ManageFood></ManageFood>
            },
            {
                path: '/foodrequest',
                element:<FoodRequest></FoodRequest>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            }
        ]

    }
])

export default router;