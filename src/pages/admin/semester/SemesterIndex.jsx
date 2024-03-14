import React from 'react';
import Search from "../../../components/Search.jsx";
import {Link} from "react-router-dom";
import EditIcon from "../../../components/icons/EditIcon.jsx";
import TrashIcon from "../../../components/icons/TrashIcon.jsx";

const SemesterIndex = ({handleSearch,semester,deleteSemester}) => {
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
                    <Link to={`/admin/semester/create`} className={`btn btn-outline-primary`}>
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
                            <th scope="col">Semester Name</th>
                            <th scope="col">
                                Action
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {semester.length > 0 &&
                            semester.map((dat, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="col">{index + 1}</th>
                                        <td>
                                            {dat.semesterName}
                                        </td>

                                        <td className="d-flex gap-2">
                                            <Link
                                                className="btn btn-outline-warning"
                                                to={`/admin/semester/edit/${dat._id}`}
                                            >
                                                <EditIcon/>
                                            </Link>
                                            <button
                                                type="button"
                                                className="btn btn-outline-danger"
                                                onClick={() => deleteSemester(dat._id)}
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

export default SemesterIndex;
