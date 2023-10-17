import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../Components/Home/Home";
import Root from "../Pages/Root/Root";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement:<h4>This is error page</h4>,
      children:[{
        path:'/',
        element: <Home/>
      }]
    },
  ]);

  export default router