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
                element:<FoodDtls></FoodDtls>,
                loader:()=> fetch('/avialbeFakeData.json')
            }
        ]

    }
])

export default router;