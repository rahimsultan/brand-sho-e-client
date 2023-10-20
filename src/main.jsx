import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import {
  RouterProvider
} from "react-router-dom";
import AuthProvider from './Provider/AuthProvider.jsx';
import router from './Routes/Routes.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    <Toaster />
    </AuthProvider>
  </React.StrictMode>
)
