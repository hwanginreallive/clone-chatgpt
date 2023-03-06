import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from '../../router/Router';
import '../../styles/global.css';
import Sidebar from '../sidebar/Sidebar';
const Layout = () => {
    return (
        <BrowserRouter>
            <Sidebar />
            <Router />
        </BrowserRouter>
    );
};

export default Layout;
