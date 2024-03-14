import React, {useContext, useEffect, useState} from 'react';
import CourseForm from "../../pages/admin/course/CourseForm.jsx";
import AxiosConfig from "../../services/AxiosConfig.jsx";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import {ModelContext} from "../../Context/ModelContext.jsx";
import {useNavigate} from "react-router-dom";

const CreateCourseController = () => {
    const form = {
        facultyId: "",
        courseName: "",
        courseCode: ""
    }
    const [faculty,setFaculty] = useState({});
    const [data,setData] = useState(form);
    const authHeader = useAuthHeader();
    const axios = AxiosConfig();
    const {changeMessage} = useContext(ModelContext);
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get('/faculty/all').then(function (response){
            setFaculty(response.data);
        }).catch((error)=>{console.error(error);})
    },[])

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.facultyId || !data.courseName || !data.courseCode) {
            console.error("All fields are required.");
            return;
        }

        axios.post('/course/create', data,{headers:{"Authorization":authHeader}})
            .then(response => {
                // Handle successful submission
                changeMessage({message: response.data.message});
                navigate('/admin/course');
            })
            .catch(error => console.error("Error creating course:", error));
    }

    return <CourseForm data={data} faculty={faculty} handleChange={handleChange} handleSubmit={handleSubmit}/>;
};

export default CreateCourseController;
