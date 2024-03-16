import Styles from './DashboardNav.module.css'
import {Link, useLocation} from "react-router-dom";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
const DashboardNav = () => {
    const auth = useAuthUser();

    const location = useLocation();
    const isUrl =(url)=>{
        return location.pathname.includes(url)
    }
    return (
        <nav className={`${Styles.dashboard_nav}`}>
            <ul className={`nav flex-column gap-3 mt-5`}>
                {/* This is the student dashbord bar*/}
                {auth.role === 'student'
                    &&
                    <>
                        <li className="nav-item">
                            <Link className={`nav-link py-3 w-100 text-secondary`}  to="/student/">Home</Link>
                        </li>
                        <li>
                            <Link to={"/student/attend"} className={`nav-link py-3 w-100 text-secondary 
                    ${isUrl('student/attend')?Styles.active:''}
                    `}>
                                Attend Class
                            </Link>
                        </li>
                    </>
                }
                {/*    This is the start of the teacher navigation bar*/}
                {
                    auth.role === 'teacher'
                    &&
                    <>
                        <li className="nav-item">
                            <Link className={`nav-link py-3 w-100 text-secondary`} to="/teacher/">Home</Link>
                        </li>
                        <Link to={"/teacher/attend"} className={`nav-link py-3 w-100 text-secondary 
                    ${isUrl('teacher/attend') ? Styles.active : ''}
                    `}>
                            Attend Class
                        </Link>
                    </>
                }
                {/*    This is the section of the admins dashboard */}
                {
                    auth.role === 'admin'
                    &&
                    <>
                        <li>
                            <Link className={`nav-link py-3 w-100 text-secondary
                    ${isUrl('/admin/users') ? Styles.active : ''}
                    `} to="/admin/users">Users</Link>
                        </li>
                        <li>
                            <Link className={`nav-link py-3 w-100 text-secondary
                    ${isUrl('/admin/semester') ? Styles.active : ''}
                    `} to="/admin/semester">Semester</Link>
                        </li>
                        <li>
                            <Link className={`nav-link py-3 w-100 text-secondary
                    ${isUrl('/admin/faculty') ? Styles.active : ''}
                    `} to="/admin/faculty">Faculty</Link>
                        </li>
                        <li>
                            <Link className={`nav-link py-3 w-100 text-secondary
                    ${isUrl('/admin/course') ? Styles.active : ''}
                    `} to="/admin/course">Course</Link>
                        </li>
                        <li>
                            <Link className={`nav-link py-3 w-100 text-secondary
                    ${isUrl('/admin/subject') ? Styles.active : ''}
                    `} to="/admin/subject">Subject</Link>
                        </li>
                        <li>
                            <Link className={`nav-link py-3 w-100 text-secondary
                    ${isUrl('/admin/report') ? Styles.active : ''}
                    `} to="/admin/report">Report</Link>
                        </li>
                    </>
                }
            </ul>
        </nav>
    );
};

export default DashboardNav;
