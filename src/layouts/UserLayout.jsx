import React from 'react'
import CustomNavbar from '../components/user/navbar/Navbar.jsx';
import Footer from '../components/user/footer/Footer.jsx';
import { Outlet } from 'react-router-dom';


export default function UserLayout() {
  return (
    <div>
      <CustomNavbar />
      <Outlet/>
      <Footer />
    </div>
  )
}
