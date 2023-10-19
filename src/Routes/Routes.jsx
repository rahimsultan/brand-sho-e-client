import {
  createBrowserRouter
} from "react-router-dom";
import Home from "../Components/Home/Home";
import AddProduct from "../Pages/Add-Product/AddProduct";
import BrandDetails from "../Pages/BrandPages/BrandDetails";
import CartPage from "../Pages/Cart/CartPage";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Root from "../Pages/Root/Root";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement:<Error/>,
      children:[
        {
        path:'/',
        element: <Home/>,
        loader: ()=>fetch('/shoes.json')
      },
      {
        path:'/add-product',
        element:<AddProduct/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/my-cart',
        element:<CartPage/>
      },
      {
        path:'brand/:name',
        element: <BrandDetails/>,
        loader:()=>fetch('/shoes.json')
      }
    ]
    },
  ]);

  export default router