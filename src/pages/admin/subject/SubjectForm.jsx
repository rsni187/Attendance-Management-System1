import React from 'react';

const SubjectForm = ({handleChange,handleSubmit,data,course,semester,teacher}) => {
    return (
        <div className={`container`}>
            <div className={`row`}>
                <div className={`col-12`}>
                    <form className={`p-3`} onSubmit={handleSubmit}>
                        <div className={`mb-4`}>
                            <label className={`form-label`} htmlFor={`name`}>
                                Subject Name
                            </label>
                            <input type={`text`} name={`name`} id={`name`} value={data.name} className={`form-control`} onChange={handleChange}
                                   placeholder={`Enter the name of the subject`}/>
                        </div>
                        <div className={`mb-4`}>
                            <label className={`form-label`} htmlFor={`code`}>
                                Subject Code
                            </label>
                            <input type={`text`} name={`code`} id={`code`} className={`form-control`} value={data.code} onChange={handleChange}
                                   placeholder={`Enter the code of the subject`}/>
                        </div>
                        <div className={`mb-4`}>
                            <label className={`form-label`} htmlFor={`courseId`}>
                                Course
                            </label>
                            <select name={`courseId`} id={`courseId`} className={`form-control`}
                                    onChange={handleChange}
                                    defaultValue={data.courseId}
                            >
                                <option value={``} className={`d-none`}>
                                    Select Course
                                </option>
                                {course.length > 0 && course.map((dat) => {
                                    return (
                                        <option key={dat._id} value={dat._id}>{dat.courseName}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className={`mb-4`}>
                            <label className={`form-label`} htmlFor={`semesterId`}>
                                Semester
                            </label>
                            <select name={`semesterId`} id={`semesterId`} className={`form-control`}
                                    onChange={handleChange}
                                    defaultValue={data.semesterId}
                            >
                                <option value={``} className={`d-none`}>
                                    Select Semester
                                </option>
                                {semester.length > 0 && semester.map((dat) => {
                                    return (
                                        <option key={dat._id} value={dat._id}>{dat.semesterName}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className={`mb-4`}>
                            <label className={`form-label`} htmlFor={`userId`}>
                                Teacher
                            </label>
                            <select name={`userId`} id={`userId`} className={`form-control`}
                                    onChange={handleChange}
                                    defaultValue={data.userId}
                            >
                                <option value={``} className={`d-none`}>
                                    Select Teacher
                                </option>
                                {teacher.length > 0 && teacher.map((dat) => {
                                    return (
                                        <option key={dat._id} value={dat._id}>{dat.firstName} {dat.lastName}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div>
                            <button type={`submit`} className={`btn btn-outline-primary w-100`}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SubjectForm;
