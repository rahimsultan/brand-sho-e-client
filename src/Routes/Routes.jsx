import {
  createBrowserRouter
} from "react-router-dom";
import Home from "../Components/Home/Home";
import AddProduct from "../Pages/Add-Product/AddProduct";
import Adidas from "../Pages/BrandPages/Adidas";
import Gucci from "../Pages/BrandPages/Gucci";
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
        loader: ()=>fetch('./shoes.json')
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
        path:'/nike',
        element: 'nike'
      },
      {
        path:'/adidas',
        element: <Adidas/>,
        loader:()=>fetch('./shoes.json')
      },
      {
        path:'/reebok',
        element: 'reebok'
      },
      {
        path:'/puma',
        element: 'puma'
      },
      {
        path:'/gucci',
        element: <Gucci/>,
        loader:()=>fetch('./shoes.json')
      },
      {
        path:'/lotto',
        element: <h2>Lotto</h2>
      }
    ]
    },
  ]);

  export default router