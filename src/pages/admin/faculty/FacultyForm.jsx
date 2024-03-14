import React from 'react';

const FacultyForm = ({handleSubmit,handleChange,data}) => {
    return (
        <div className={`container mt-2`}>
            <div className={`row`}>
                <div className={`col-12`}>
                    <form onSubmit={handleSubmit}>
                        <div className={`mb-3`}>
                            <label htmlFor={`facultyName`}>Faculty Name</label>
                            <input type={`text`} name={`facultyName`} id={`facultyName`} value={data.facultyName} className={`form-control`} onChange={handleChange} placeholder={`Enter the name of the faculty that you want to create`}/>
                        </div>
                        <div className={`mb-4`}>
                            <button className={`btn btn-outline-primary w-100`} type={`submit`}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FacultyForm;
