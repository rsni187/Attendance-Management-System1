import {Route, Routes} from "react-router-dom";
import Home from "../controllers/teacher/Home.jsx";
import DashboardLayout from "../components/DashboardLayout.jsx";

const TeacherRoute = () => {
    return (
        <DashboardLayout>
            <div className='container-fluid p-3'>
        <Routes>
            <Route path={'/'} element={<Home/>} />
            <Route path={'/attendance'} element={<Home/>} />
        </Routes>
        </div>
        </DashboardLayout>
    );
};

export default TeacherRoute;
