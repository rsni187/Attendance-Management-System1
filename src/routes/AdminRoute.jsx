import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../controllers/admin/Home.jsx";
import DashboardLayout from "../components/DashboardLayout.jsx";
import UsersController from '../controllers/admin/UsersController.jsx';

const AdminRoute = () => {
    return (
        <DashboardLayout>
            <div className='container-fluid p-3'>
        <Routes>
            <Route path={'/'} element={<Home/>} />
            <Route path={'/users'} element={<UsersController/>} />
            <Route path={'/users/create'} element={<Home/>} />
            <Route path={'/users/edit/:id'} element={<Home/>} />
        </Routes>
            </div>
        </DashboardLayout>
    );
};

export default AdminRoute;
