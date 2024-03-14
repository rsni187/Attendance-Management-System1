import {Route, Routes} from "react-router-dom";
import Home from "../controllers/student/Home.jsx";
import DashboardLayout from "../components/DashboardLayout.jsx";

const StudentRoute = () => {
    return (
        <DashboardLayout>
            <div className='container-fluid p-3'>
            <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/classes' element={<Home />} />
            <Route path='/attendance' element={<Home />} />
            </Routes>
            </div>
        </DashboardLayout>
    );
};

export default StudentRoute;
