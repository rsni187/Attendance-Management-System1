import React from 'react';
import Search from "../../../components/Search.jsx";
import {Link} from "react-router-dom";
import EditIcon from "../../../components/icons/EditIcon.jsx";
import TrashIcon from "../../../components/icons/TrashIcon.jsx";

const CourseIndex = ({handleSearch,deleteCourse,course}) => {
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
                    <Link to={`/admin/course/create`} className={`btn btn-outline-primary`}>
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
                            <th scope="col">Course Name</th>
                            <th scope="col">Faculty</th>
                            <th scope="col">Course Code</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {course.length > 0 &&
                            course.map((dat, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="col">{index + 1}</th>
                                        <td>
                                            {dat.courseName}
                                        </td>
                                        <td>{dat.faculty.facultyName}</td>
                                        <td>{dat.courseCode}</td>
                                        <td className="d-flex gap-2">
                                            <Link
                                                className="btn btn-outline-warning"
                                                to={`/admin/course/edit/${dat._id}`}
                                            >
                                                <EditIcon/>
                                            </Link>
                                            <button
                                                type="button"
                                                className="btn btn-outline-danger"
                                                onClick={() => deleteCourse(dat._id)}
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

export default CourseIndex;
