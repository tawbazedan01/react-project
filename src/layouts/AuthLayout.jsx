import React from 'react'
import CustomNavbar from '../components/user/navbar/Navbar.jsx';
import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <>
      <CustomNavbar />
      <Outlet />
    </>
  )
}
