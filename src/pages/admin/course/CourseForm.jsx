import React from 'react';

const CourseForm = ({handleSubmit,handleChange,faculty,data}) => {
    return (
        <div className={`mt-4 container`}>
            <div className={`row`}>
                <div className={`col-12`}>
                    <form onSubmit={handleSubmit}>
                        <div className={`mb-3`}>
                            <label htmlFor={`facultyId`} className={`form-label`}>Faculty</label>
                            <select name={`facultyId`} defaultValue={data.facultyId} id={`facultyId`} onChange={handleChange} className={`form-select`}>
                                <option value={''} className={`d-none`}>Select Faculty</option>
                                {faculty.length>0 && faculty.map(e => (
                                    <option key={e._id} value={e._id} selected={e._id === data.facultyId}>{e.facultyName}</option>
                                ))}
                            </select>
                        </div>
                        <div className={`mb-3`}>
                            <label htmlFor={`courseName`} className={`form-label`}>Course Name</label>
                            <input type={`text`} name={`courseName`} id={`courseName`} value={data.courseName} className={`form-control`} onChange={handleChange}/>
                        </div>
                        <div className={`mb-3`}>
                            <label htmlFor={`courseCode`} className={`form-label`}>Course Code</label>
                            <input type={`text`} name={`courseCode`} id={`courseCode`} value={data.courseCode} className={`form-control`} onChange={handleChange}/>
                        </div>
                        <div className={`mb-3`}>
                            <button type={`submit`} className={`btn btn-outline-primary w-100`}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CourseForm;
