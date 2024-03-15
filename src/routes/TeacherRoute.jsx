import {Route, Routes} from "react-router-dom";
import Home from "../controllers/teacher/Home.jsx";
import DashboardLayout from "../components/DashboardLayout.jsx";
import AttendController from "../controllers/AttendController.jsx";

const TeacherRoute = () => {
    return (
        <DashboardLayout>
            <div className='container-fluid p-3'>
        <Routes>
            <Route path={'/'} element={<Home/>} />
            <Route path={'/attend'} element={<AttendController/>} />
        </Routes>
        </div>
        </DashboardLayout>
    );
};

export default TeacherRoute;
