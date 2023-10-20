import {
  createBrowserRouter
} from "react-router-dom";
import Home from "../Components/Home/Home";
import AddProduct from "../Pages/Add-Product/AddProduct";
import BrandDetails from "../Pages/BrandPages/BrandDetails";
import CartPage from "../Pages/Cart/CartPage";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import ProductDetails from "../Pages/ProductDeatils/ProductDetails";
import Register from "../Pages/Register/Register";
import Root from "../Pages/Root/Root";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement:<Error/>,
      children:[
        {
        path:'/',
        element: <Home/>,
        loader: ()=>fetch('http://localhost:5000/products')
      },
      {
        path:'/add-product',
        element:<PrivateRoute><AddProduct/></PrivateRoute>
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
        element:<PrivateRoute><CartPage/></PrivateRoute>,
        loader: ()=>fetch('http://localhost:5000/cart/products')
      },
      {
        path:'/brand/:name',
        element: <PrivateRoute><BrandDetails/></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/product/${params.name}`)
      },
      {
        path:'/:brand/:id',
        element:<PrivateRoute><ProductDetails/></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path:'/update-product/:productId',
        element:<PrivateRoute><UpdateProduct/></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/products/${params.productId}`)
      }
    ]
    },
  ]);

  export default router