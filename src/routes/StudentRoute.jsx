import {Route, Routes} from "react-router-dom";
import Home from "../controllers/student/Home.jsx";
import DashboardLayout from "../components/DashboardLayout.jsx";
import AttendController from "../controllers/AttendController.jsx";

const StudentRoute = () => {
    return (
        <DashboardLayout>
            <div className='container-fluid p-3'>
            <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/attend' element={<AttendController />} />
            </Routes>
            </div>
        </DashboardLayout>
    );
};

export default StudentRoute;
