import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import style from './userSidebar.module.css';


export default function UserSidebar() {
    return (
        <Sidebar>
            <Menu className={`${style.sidebar}`} >
                <MenuItem component={<Link to="/profile/info" />}> User Info</MenuItem>
                <MenuItem component={<Link to="/profile/orders" />}> Orders</MenuItem>
            </Menu>
        </Sidebar>
    )
}
