import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routers/Routers.jsx'
import { Toaster } from 'react-hot-toast';
import AuthProvider from './Provider/AuthProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} ></RouterProvider>
    <Toaster></Toaster>
   </AuthProvider>

  </React.StrictMode>,
)
