import React from 'react';
import AuthLayout from './layouts/AuthLayout.jsx';
import DashboardLayout from './layouts/DashboardLayout.jsx';
import Register from './pages/user/register/Register.jsx';
import Login from './pages/user/login/Login.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AuthLayout />,
      children: [
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ]
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
    },
  ])
  return (
    <>
      <ToastContainer/>
      <RouterProvider router={router} />
    </>
  )
}
