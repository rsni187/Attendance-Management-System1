import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../controllers/admin/Home.jsx";
import DashboardLayout from "../components/DashboardLayout.jsx";

const AdminRoute = () => {
    return (
        <DashboardLayout>
        <Routes>
            <Route path={'/'} element={<Home/>} />
            <Route path={'/user'} element={<Home/>} />
            <Route path={'/user/create'} element={<Home/>} />
            <Route path={'/user/edit/:id'} element={<Home/>} />
        </Routes>
        </DashboardLayout>
    );
};

export default AdminRoute;
