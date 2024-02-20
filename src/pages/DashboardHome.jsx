import {Link} from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout.jsx";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";

const DashboardHome = () => {
    const auth = useAuthUser()

    return (
            
            <main className={`d-flex text-secondary align-items-center justify-content-center text-center h-100`}>
                <h1 className={`h2`}>
                    Welcome
                    <div className={`h1 text-black`}>{auth.firstName} {auth.lastName}</div>
                    {auth.role === 'student' && <>Join your class now <Link to={`/student/attend`} >Click here!</Link></>}
                    {auth.role === 'teacher' && <> <Link to={`/teacher/attend`} >Click here!</Link></>}
                    {auth.role === 'admin' && <>Join your class now <Link to={`/admin/attend`} >Click here!</Link></>}
                </h1>
            </main>
    );
};

export default DashboardHome;
