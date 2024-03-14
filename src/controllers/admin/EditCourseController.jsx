import React, {useContext, useEffect, useState} from 'react';
import EditCourse from "../../pages/admin/course/EditCourse.jsx";
import AxiosConfig from "../../services/AxiosConfig.jsx";
import {useNavigate, useParams} from "react-router-dom";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import CourseForm from "../../pages/admin/course/CourseForm.jsx";
import {ModelContext} from "../../Context/ModelContext.jsx";

const EditCourseController = () => {
    const form = {
        facultyId: "",
        courseName: "",
        courseCode: ""
    }
    const [faculty,setFaculty] = useState({});
    const [data,setData] = useState(form);
    const axios = AxiosConfig();
    const navigate = useNavigate()
    const authHeader = useAuthHeader()
    const {changeMessage} = useContext(ModelContext);
    const {id} = useParams();

    useEffect(()=>{
        axios.get('/faculty/all').then(function (response){
            setFaculty(response.data);
            axios.get(`/course/id/${id}`).then(function (response){
                setData(response.data);
            }).catch(error=>console.error(error))
        }).catch((error)=>{console.error(error);})
    },[])

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`/course/update/${id}`,data,{headers:{"Authorization":authHeader}}).then(
            (response)=>{
                changeMessage({message:response.data.message});
            }
        )
    }

    return <CourseForm handleChange={handleChange} handleSubmit={handleSubmit} data={data} faculty={faculty}/>;
};

export default EditCourseController;
