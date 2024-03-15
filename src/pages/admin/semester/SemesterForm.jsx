import React from 'react';

const SemesterForm = ({handleSubmit,handleChange,data}) => {
    return (
        <div className={`container mt-3`}>
            <div className={`row`}>
                <div className={`col-12`}>
                    <form className={`p-2`} onSubmit={handleSubmit}>
                        <div className={`mb-3`}>
                            <label htmlFor={`semesterName`}>Semester Name</label>
                            <input type={`text`} name={`semesterName`} id={`semesterName`} value={data.semesterName} className={`form-control`} onChange={handleChange} placeholder={`Enter the name of the semester that you want to create`}/>
                        </div>
                        <div className={`mb-3`}>
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

export default SemesterForm;
