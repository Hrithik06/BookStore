import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import Shop from "../components/Shop";
import DashBoardLayout from "../components/Dash/DashBoardLayout";
import DashBoard from "../components/Dash/DashBoard";
import UploadBook from "../components/Dash/UploadBook";
import ManageBooks from "../components/Dash/ManageBooks";
import EditBook from "../components/Dash/EditBook";
const appRouter = createBrowserRouter([
{
    path:"/",
    element:<App/>,
    children:[
        {
            path:"/",
            element:<Home/>,
        },
        {
            path:"/shop",
            element:<Shop/>,
        },
        
    
    ]
},
{
    path:"/admin/dashboard",
    element:<DashBoardLayout/>,
    children:[
        {
            path:"/admin/dashboard",
            element:<DashBoard/>,
        },
        {
            path:"/admin/dashboard/upload",
            element:<UploadBook/>,
        },
        {
            path:"/admin/dashboard/manage",
            element:<ManageBooks/>,
        },
        {
            path:"/admin/dashboard/edit-book/:id",
            element:<EditBook/>,
            loader: ({params})=> fetch(`http://localhost:5000/book/${params.id}`)
        }
    ]
},
])

export default appRouter;