import React from 'react'
import  Sidebar from '../Sidebar/Sidebar';
import TopNav from '../TopNav/TopNav';
import { Outlet } from 'react-router-dom';


const Layout = () => {
    return (
    <div className='layout'>
        <Sidebar />
        <div className="main_layout">
            <TopNav />
            <div className="content">
                <Outlet/>
            </div>
        </div>
    </div>
    );
};

export default Layout;