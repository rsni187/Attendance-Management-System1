import React from 'react';

const AttendPage = ({attendClass,subject,handleChange}) => {
    return (
        <div className={`container`}>
            <div className={`row`}>
                <div className={`col-12`}>
                    <form className={`p-2`} onSubmit={attendClass}>
                        <div className={`mb-3`}>
                            <label htmlFor={`subjectId`} className={`form-label`}>Subject:</label>
                            <select name={`subjectId`} id={`subjectId`} onChange={handleChange} className={`form-select`}>
                            <option value={``} className={`d-none`}>
                                Select Subject to attend
                            </option>
                                {subject.length>0 && subject.map((dat,ind)=>{
                                    return (
                                        <option key={dat._id} value={dat._id}>{dat.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className={`mb-4`}>
                            <button className={`btn btn-outline-primary w-100`}>
                                Attend
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AttendPage;
