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
import ResetPassword from './pages/user/login/resetPass/ResetPassword.jsx';
import ChangePassword from './pages/user/login/resetPass/ChangePassword.jsx';
import Profile from './pages/user/profile/Profile.jsx';
import UserInfo from './pages/user/profile/userInfo/UserInfo.jsx';
import Orders from './pages/user/profile/orders/Orders.jsx';
import Description from './components/description/Description.jsx';
import Reviews from './components/reviews/Reviews.jsx';
import Checkout from './pages/user/checkout/Checkout.jsx';
import AuthProtectedRoute from './components/user/AuthProtectedRoute.jsx';
import UserContextProvider from './components/user/context/userContext/UserContext.jsx';
import CartContextProvider from './components/user/context/CartContext.jsx';
import Contact from './pages/user/contact/Contact.jsx';
import About from './pages/user/about/About.jsx';

const router = createBrowserRouter([
  {
    path: '/auth',
    element: (
      <AuthProtectedRoute>
        <AuthLayout />
      </AuthProtectedRoute>
    ),
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
      // هنا نقوم بتغليف المسارات التي تحتاجها بالـ Providers
      <UserContextProvider>
        <CartContextProvider>
          <ProtectedRoute>
            <UserLayout />
          </ProtectedRoute>
        </CartContextProvider>
      </UserContextProvider>
    ),
    children: [
      { path: 'home', element: <Home /> },
      { path: 'categories', element: <Categories /> },
      { path: 'categories/:categoryId', element: <ProductWithCategory /> },
      { path: 'products', element: <Products /> },
      {
        path: 'products/:productId',
        element: <ProductDetails />,
        children: [
          { path: 'description', element: <Description /> },
          { path: 'reviews', element: <Reviews /> },
        ],
      },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'cart', element: <Cart /> },
      { path: 'checkout', element: <Checkout /> },
      {
        path: 'profile',
        element: <Profile />,
        children: [
          { path: 'info', element: <UserInfo /> },
          { path: 'orders', element: <Orders /> },
        ],
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
  },
]);

export default function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}
