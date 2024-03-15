import FormInput from "../../components/FormInput.jsx";
import FormError from "../../components/FormError.jsx";
import {Link} from "react-router-dom";

function EditUser({handleSubmit,semester,faculty,course,userData,handleChange,error}) {
    return (
        <main>
            <form onSubmit={handleSubmit}>
                <fieldset className={`p-4 rounded mx-auto shadow-lg`}>

                    <div className="row">
                        <FormInput
                            label="First Name:"
                            name="firstName"
                            value={userData.firstName}
                            change={handleChange}
                            placeholder={`Enter your first name`}
                            error={error.firstName}
                        />
                        <FormInput
                            label="Middle Name:"
                            type="text"
                            name="middleName"
                            change={handleChange}
                            value={userData.middleName}
                            placeholder={`Enter your middle name`}
                            error={error.middleName}
                        />
                        <FormInput
                            label="Last Name:"
                            type="text"
                            name="lastName"
                            value={userData.lastName}
                            change={handleChange}
                            placeholder={`Enter your last name`}
                            error={error.lastName}
                        />
                    </div>
                    <div className="row">
                        <FormInput
                            label="Email:"
                            type="email"
                            name="email"
                            value={userData.email}
                            change={handleChange}
                            error={error.email}
                            placeholder={`Enter your email address`}
                        />
                        <FormInput
                            label="Username"
                            name="username"
                            change={handleChange}
                            value={userData.username}
                            error={error.username}
                            placeholder={`Enter your username`}
                        />
                        <FormInput
                            label={`Date of Birth (DOB):`}
                            name={`dob`}
                            change={handleChange}
                            value={userData.dob}
                            error={error.dob}
                            type={`date`}
                        />
                    </div>
                    <div className="row">
                        <FormInput
                            label="Phone Number:"
                            name="phoneNumber"
                            type={`number`}
                            value={userData.phoneNumber}
                            error={error.phoneNumber}
                            change={handleChange}
                            placeholder={`Enter your phone number`}
                        />
                        <FormInput
                            label="Address:"
                            name="address"
                            value={userData.address}
                            change={handleChange}
                            error={error.address}
                            placeholder={`Enter your address`}
                        />
                    </div>

                    <div className="row">
                        <FormInput
                            label="Password:"
                            name="password"
                            type={`password`}
                            value={userData.password}
                            change={handleChange}
                            error={error.password}
                            placeholder={`Enter password`}
                        />
                        <FormInput
                            label="Re-Enter Password:"
                            type={`password`}
                            name="cpassword"
                            value={userData.cpassword}
                            change={handleChange}
                            error={error.cpassword}
                            placeholder={`Re-enter password`}
                        />
                    </div>
                    <div className={`row mb-4`}>
                        <div className={`col`}>
                        <label htmlFor={`facultyId`} className={`form-label`}>
                            Faculty
                        </label>
                        <select className={`form-control`} name={`facultyId`} id={`facultyId`} value={userData.facultyId}
                                onChange={handleChange}>
                            <option value={``} className={`d-none`}>Select faculty</option>
                            {faculty.length > 0 && faculty.map((faculty) => {
                                return <option key={faculty._id} value={faculty._id}>{faculty.facultyName}</option>
                            })}
                        </select>
                    </div>
                    <div className={`col`}>
                        <label className={`form-label`}>
                            Course
                        </label>
                        <select className={`form-control`} name={`courseId`} id={`courseId`} value={userData.courseId}
                                onChange={handleChange}>
                            <option value={``} className={`d-none`}>Select faculty</option>
                            {course.length > 0 && course.map((dat) => {
                                return <option key={dat._id} value={dat._id}>{dat.courseName}</option>
                            })}
                        </select>
                    </div>
                    <div className={`col`}>
                        <label className={`form-label`}>
                            Semester
                        </label>
                        <select className={`form-control`} name={`semesterId`} id={`semesterId`} value={userData.semesterId}
                                onChange={handleChange}>
                            <option value={``} className={`d-none`}>Select faculty</option>
                            {semester.length > 0 && semester.map((dat) => {
                                return <option key={dat._id} value={dat._id}>{dat.semesterName}</option>
                            })}
                        </select>
                    </div>
                    </div>
                    <div className={`row mb-3`}>
                        <div className={`col`}>
                            <label htmlFor={`role`} className={``}>Role</label>
                            <select onChange={handleChange} name={`role`} id={`role`} className={`form-select`}>
                                <option value={``} className={`d-none`}>Select Role if you want to change the role</option>
                                <option value={`admin`}>Admin</option>
                                <option value={`teacher`}>Teacher</option>
                                <option value={`student`}>Student</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col">
                            <button type="submit" className="btn btn-outline-primary w-100">
                                Submit
                            </button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </main>
    );
}

export default EditUser;