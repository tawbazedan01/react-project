import React from 'react';
import AuthLayout from './layouts/AuthLayout.jsx';
import UserLayout from './layouts/UserLayout.jsx';
import DashboardLayout from './layouts/DashboardLayout.jsx';
import Register from './pages/user/register/Register.jsx';
import Login from './pages/user/login/Login.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/user/home/Home.jsx';
import Categories from './pages/user/categories/Categories.jsx';
import Products from './pages/user/products/Products.jsx';
import ProductWithCategory from './pages/user/products/ProductWithCategory.jsx';
import ProductDetails from './pages/user/products/details/ProductDetails.jsx';
import Cart from './pages/user/cart/Cart.jsx';
import ProtectedRoute from './components/user/ProtectedRoute.jsx';
import CartContextProvider from './components/user/context/CartContext.jsx';
import ResetPassword from './pages/user/login/resetPass/ResetPassword.jsx';
import ChangePassword from './pages/user/login/resetPass/ChangePassword.jsx';
import Profile from './pages/user/profile/Profile.jsx';
import UserInfo from './pages/user/profile/userInfo/UserInfo.jsx';
import Orders from './pages/user/profile/orders/Orders.jsx';
import UserContextProvider from './components/user/context/userContext/UserContext.jsx';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/auth',
      element: <AuthLayout />,
      children: [
        { path: 'register', element: <Register /> },
        { path: 'login', element: <Login /> },
        { path: 'resetPassword', element: <ResetPassword /> },
        { path: 'changePassword', element: <ChangePassword /> },


      ],
    },
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <UserLayout />
        </ProtectedRoute>
      ),
      children: [
        { path: 'home', element: <Home /> },
        { path: 'categories', element: <Categories /> },
        { path: 'categories/:categoryId', element: <ProductWithCategory /> },
        { path: 'products', element: <Products /> },
        { path: 'products/:productId', element: <ProductDetails /> },
        { path: 'cart', element: <Cart /> },
        {
          path: 'profile', element: <Profile />,
          children: [
            { path: 'info', element: <UserInfo /> },
            { path: 'orders', element: <Orders /> },
          ]
        },
      ],
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
    },
  ]);

  return (
    <UserContextProvider>
      <CartContextProvider>
        <ToastContainer />
        <RouterProvider router={router} />
      </CartContextProvider>
    </UserContextProvider>

  );
}
