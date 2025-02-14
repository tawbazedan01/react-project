import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import style from './userSidebar.module.css';
import { FaInfoCircle } from "react-icons/fa";
import { FaFirstOrderAlt } from "react-icons/fa";
import { AiOutlineRightCircle } from "react-icons/ai";
import { AiOutlineLeftCircle } from "react-icons/ai";



export default function UserSidebar() {

    const [isCollapsed, setIsCollapsed] = useState();

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed)
    }


    return (
        <Sidebar collapsed={isCollapsed}>
            <Menu className={`${style.sidebar}`} >
                <div className={style.collapse1}>
                    {isCollapsed ? <AiOutlineRightCircle onClick={toggleCollapse} /> : <AiOutlineLeftCircle onClick={toggleCollapse} />}
                </div>
                <MenuItem component={<Link to="/profile/info" />}> <div className={style.icons}> <FaInfoCircle className={style.icon} />  <span>User Info</span> </div> </MenuItem>
                <MenuItem component={<Link to="/profile/orders" />}> <div className={style.icons}> <FaFirstOrderAlt className={style.icon} /> <span>Orders </span> </div> </MenuItem>
            </Menu>
        </Sidebar>
    )
}
