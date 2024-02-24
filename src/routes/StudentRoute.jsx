import {Route, Routes} from "react-router-dom";
import Home from "../controllers/student/Home.jsx";
import DashboardLayout from "../components/DashboardLayout.jsx";

const StudentRoute = () => {
    return (
        <DashboardLayout>
            <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/assignments' element={<Home />} />
            <Route path='/classes' element={<Home />} />
            <Route path='/attendance' element={<Home />} />
            </Routes>
        </DashboardLayout>
    );
};

export default StudentRoute;
