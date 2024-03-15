import React, {useContext, useEffect, useState} from 'react';
import SemesterForm from "../../pages/admin/semester/SemesterForm.jsx";
import {ModelContext} from "../../Context/ModelContext.jsx";
import {useNavigate, useParams} from "react-router-dom";
import AxiosConfig from "../../services/AxiosConfig.jsx";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";

const EditSemesterController = () => {
    const form = {
        semesterName:""
    }
    const [data,setData] = useState(form);
    const authHeader = useAuthHeader();
    const axios = AxiosConfig();
    const navigate = useNavigate()
    const {id} = useParams();
    const {changeMessage} = useContext(ModelContext)

useEffect(
    ()=>{
        axios.get(`/semester/id/${id}`).then((response)=>{
            setData(response.data);
        }).catch(err=>console.error(err))
    },[]
)
    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`/semester/update/${id}`,data,{headers:{"Authorization":authHeader}}).then(
            (response)=>{
                changeMessage({message:response.data.message});
                navigate('/admin/semester');
            }
        )
    }
    return <SemesterForm handleSubmit={handleSubmit} handleChange={handleChange} data={data}/>;
};

export default EditSemesterController;
