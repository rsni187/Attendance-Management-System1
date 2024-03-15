import React, {useContext, useEffect, useState} from 'react';
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import AxiosConfig from "../../services/AxiosConfig.jsx";
import {useNavigate} from "react-router-dom";
import {ModelContext} from "../../Context/ModelContext.jsx";
import SubjectForm from "../../pages/admin/subject/SubjectForm.jsx";

const CreateSubjectController = () => {
    const form = {
        name:"",
        code:"",
        courseId:"",
        userId:"",
        semesterId:""
    }

    const [data, setData] = useState(form);
    const [course,setCourse] = useState({});
    const [semester,setSemester] = useState({});
    const [teacher,setTeachers] = useState({});
    const authHeader = useAuthHeader();

    const axios = AxiosConfig();
    const navigate = useNavigate();
    const {changeMessage} = useContext(ModelContext);

    useEffect(()=>{
        axios.get('/course/all').then(function (response){
            setCourse(response.data);
        }).catch((error)=>{console.error(error);})

        axios.get('/semester/all').then(function (response){
            setSemester(response.data);
        }).catch((error)=>{console.error(error);})

        axios.get('/users/all',{headers:{"Authorization":authHeader}})
            .then((response)=>{
                setTeachers(response.data)
            })
            .catch(err=>console.error(err))
        ;
    },[])
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/subject/create',data,{headers:{"Authorization":authHeader}}).then((response) => {
            changeMessage({message:response.data.message});
            navigate('/admin/subject');
        }).catch((error)=>{console.error(error);})
    }

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    return <SubjectForm  handleChange={handleChange} handleSubmit={handleSubmit} data={data} course={course} semester={semester} teacher={teacher}/>;
};

export default CreateSubjectController;
