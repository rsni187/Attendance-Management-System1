import React from "react";
import { Link } from "react-router-dom";
import TrashIcon from "../../components/icons/TrashIcon";
import EditIcon from "../../components/icons/EditIcon";
import Search from "../../components/Search";

const User = ({ users,handleSearch,deleteUser }) => {
  
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
        </div>
        <div className="col-12">
          <div className="table-reponsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Sn</th>
                  <th scope="col">Name</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Address</th>
                  <th scope="col">DOB</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 &&
                  users.map((dat, index) => {
                    return (
                      <tr key={index}>
                        <th scope="col">{index + 1}</th>
                        <td>
                          {dat.firstName} {dat?.middleName} {dat.lastName}
                        </td>
                        <td>{dat.username}</td>
                        <td>{dat.email}</td>
                        <td>{dat.phoneNumber}</td>
                        <td>{dat.address}</td>
                        <td>{new Date(dat.dob).toDateString()}</td>
                        <td className="d-flex gap-2">
                          <Link
                            className="btn btn-outline-warning"
                            to={`/admin/users/edit`}
                          >
                            <EditIcon />
                          </Link>
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => deleteUser(dat._id)}
                          >
                            <TrashIcon />
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

export default User;
