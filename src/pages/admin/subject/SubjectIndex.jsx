import React from 'react';
import Search from "../../../components/Search.jsx";
import {Link} from "react-router-dom";
import EditIcon from "../../../components/icons/EditIcon.jsx";
import TrashIcon from "../../../components/icons/TrashIcon.jsx";

const SubjectIndex = ({handleSearch,subject,deleteSubject}) => {
    return (
        <div className="row">
            <div className="col-12 d-flex mb-2">
                <div>
                    <Search
                        name={`search`}
                        handle={handleSearch}
                        placeholder={`Search ....`}
                    />
                </div>
                <div className={`ms-auto`}>
                    <Link to={`/admin/subject/create`} className={`btn btn-outline-primary`}>
                        Create
                    </Link>
                </div>
            </div>
            <div className="col-12">
                <div className="table-reponsive">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">Sn</th>
                            <th scope="col">Subject Name</th>
                            <th scope="col">Subject Code</th>
                            <th scope="col">Course</th>
                            <th scope="col">Semester</th>
                            <th scope="col">Teacher</th>
                            <th scope="col">
                                Action
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {subject.length > 0 &&
                            subject.map((dat, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="col">{index + 1}</th>
                                        <td>
                                            {dat.name}
                                        </td>
                                        <td>
                                            {dat.code}
                                        </td>
                                        <td>
                                            {dat.course.courseName}
                                        </td>
                                        <td>
                                            {dat.semester.semesterName}
                                        </td>
                                        <td>
                                            {dat.teacher.firstName} {dat.teacher.lastName}
                                        </td>

                                        <td className="d-flex gap-2">
                                            <Link
                                                className="btn btn-outline-warning"
                                                to={`/admin/subject/edit/${dat._id}`}
                                            >
                                                <EditIcon/>
                                            </Link>
                                            <button
                                                type="button"
                                                className="btn btn-outline-danger"
                                                onClick={() => deleteSubject(dat._id)}
                                            >
                                                <TrashIcon/>
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SubjectIndex;
