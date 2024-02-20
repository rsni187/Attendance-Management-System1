import {Route, Routes} from "react-router-dom";
import Home from "../controllers/teacher/Home.jsx";
import DashboardLayout from "../components/DashboardLayout.jsx";

const TeacherRoute = () => {
    return (
        <DashboardLayout>
        <Routes>
            <Route path={'/'} element={<Home/>} />
        </Routes>
        </DashboardLayout>
    );
};

export default TeacherRoute;
