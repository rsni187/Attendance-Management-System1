import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../controllers/admin/Home.jsx";
import DashboardLayout from "../components/DashboardLayout.jsx";
import UsersController from '../controllers/admin/UsersController.jsx';
import EditUserController from "../controllers/admin/EditUserController.jsx";
import EditCourseController from "../controllers/admin/EditCourseController.jsx";
import CreateCourseController from "../controllers/admin/CreateCourseController.jsx";
import CourseController from "../controllers/admin/CourseController.jsx";
import FacultyController from "../controllers/admin/FacultyController.jsx";
import CreateFacultyController from "../controllers/admin/CreateFacultyController.jsx";
import EditFacultyController from "../controllers/admin/EditFacultyController.jsx";
import SemesterController from "../controllers/admin/SemesterController.jsx";
import CreateSemesterController from "../controllers/admin/CreateSemesterController.jsx";
import EditSemesterController from "../controllers/admin/EditSemesterController.jsx";
import SubjectController from "../controllers/admin/SubjectController.jsx";
import CreateSubjectController from "../controllers/admin/CreateSubjectController.jsx";
import EditSubjectController from "../controllers/admin/EditSubjectController.jsx";
import ReportController from "../controllers/admin/ReportController.jsx";

const AdminRoute = () => {
    return (
        <DashboardLayout>
            <div className='container-fluid p-3'>
                <Routes>
                    {/*User side routing*/}
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/users'} element={<UsersController/>}/>
                    <Route path={'/users/edit/:id'} element={<EditUserController/>}/>
                    {/*End of user side routing*/}

                    {/*starting of course routing*/}
                    <Route path={'/course'} element={<CourseController/>}/>
                    <Route path={'/course/create'} element={<CreateCourseController/>}/>
                    <Route path={'/course/edit/:id'} element={<EditCourseController/>}/>
                    {/*end of course routing*/}

                    {/*Starting of faculty routing*/}
                    <Route path={'/faculty'} element={<FacultyController/>}/>
                    <Route path={'/faculty/create'} element={<CreateFacultyController/>}/>
                    <Route path={'/faculty/edit/:id'} element={<EditFacultyController/>}/>
                    {/*end of Faculty route*/}

                    {/*starting of semester routing*/}
                    <Route path={'/semester'} element={<SemesterController/>}/>
                    <Route path={'/semester/create'} element={<CreateSemesterController/>}/>
                    <Route path={'/semester/edit/:id'} element={<EditSemesterController/>}/>
                    {/*Ending of semester routing*/}


                    {/*Starting of the subject */}
                    <Route path={'/subject'} element={<SubjectController/>}/>
                    <Route path={'/subject/create'} element={<CreateSubjectController/>}/>
                    <Route path={'/subject/edit/:id'} element={<EditSubjectController/>}/>
                    {/*Ending of the subject*/}
                    <Route path={'/report'} element={<ReportController/>}/>
                </Routes>
            </div>
        </DashboardLayout>
    );
};

export default AdminRoute;
