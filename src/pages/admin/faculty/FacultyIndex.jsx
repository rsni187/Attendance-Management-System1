import React from 'react';
import Search from "../../../components/Search.jsx";
import {Link} from "react-router-dom";
import EditIcon from "../../../components/icons/EditIcon.jsx";
import TrashIcon from "../../../components/icons/TrashIcon.jsx";

const FacultyIndex = ({handleSearch,faculty,deleteFaculty}) => {
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
                    <Link to={`/admin/faculty/create`} className={`btn btn-outline-primary`}>
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
                            <th scope="col">Faculty Name</th>
                            <th scope="col">
                                Action
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {faculty.length > 0 &&
                            faculty.map((dat, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="col">{index + 1}</th>
                                        <td>
                                            {dat.facultyName}
                                        </td>

                                        <td className="d-flex gap-2">
                                            <Link
                                                className="btn btn-outline-warning"
                                                to={`/admin/faculty/edit/${dat._id}`}
                                            >
                                                <EditIcon/>
                                            </Link>
                                            <button
                                                type="button"
                                                className="btn btn-outline-danger"
                                                onClick={() => deleteFaculty(dat._id)}
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

export default FacultyIndex;
