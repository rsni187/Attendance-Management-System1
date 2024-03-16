import React from 'react';

const Report = ({handleChange,handleSubmit,clearDates,data,downloadRef,subject,semester,download}) => {
    return (
        <div className={`container`}>
            <div className={`raw`}>
                <div className={`col-12`}>
                    <form onSubmit={handleSubmit}>
                        <div className={`mb-3`}>
                            <label htmlFor={`subjectID`} className={`form-label`}>Subject</label>
                            <select name={`subjectID`} id={`subjectID`} onChange={handleChange}
                                    className={`form-select`} defaultValue={data.subjectID}>
                                <option value={``}>
                                    Select Subject
                                </option>
                                {subject.length > 0 &&
                                    subject.map((dat) => {
                                        return (
                                            <option key={dat._id} value={dat._id}>{dat.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className={`mb-3`}>
                            <label htmlFor={`semesterID`} className={`form-label`}>Semester</label>
                            <select name={`semesterID`} id={`semesterID`} onChange={handleChange}
                                    className={`form-select`} defaultValue={data.semesterID}>
                                <option value={``}>
                                    Select Subject
                                </option>
                                {semester.length > 0 &&
                                    semester.map((dat) => {
                                        return (
                                            <option key={dat._id} value={dat._id}>{dat.semesterName}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                        <div className={`mb-3`}>
                            <label htmlFor={`startDate`} className={`form-label`}>Starting Date</label>
                            <input type={`date`} name={`startDate`} id={`startDate`} defaultValue={data.startDate}
                                   onChange={handleChange} className={`form-control`}/>
                        </div>
                        <div className={`mb-3`}>
                            <label htmlFor={`endDate`} className={`form-label`}>Ending Date</label>
                            <input type={`date`} name={`endDate`} id={`endDate`} defaultValue={data.endDate}
                                   onChange={handleChange} className={`form-control`}/>
                        </div>
                        <div className={`mb-3`}>
                            <button type={`submit`} className={`btn btn-outline-primary w-100`}>
                                Generate
                            </button>
                        </div>
                        <div className={`mb-3`}>
                            <a href={download} download="attendence.xlsx"
                               className={`btn btn-warning w-100 ${download ? "" : "d-none"}`}>
                                Download
                            </a>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Report;
