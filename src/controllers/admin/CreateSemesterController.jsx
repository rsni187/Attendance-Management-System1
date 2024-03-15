import React, {useContext, useState} from 'react';
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import AxiosConfig from "../../services/AxiosConfig.jsx";
import {ModelContext} from "../../Context/ModelContext.jsx";
import {useNavigate} from "react-router-dom";
import SemesterForm from "../../pages/admin/semester/SemesterForm.jsx";

const CreateSemesterController = () => {
    const form = {
        semesterName:''
    }
    const [data,setData] = useState(form);
    const authHeader = useAuthHeader();
    const axios = AxiosConfig();
    const {changeMessage} = useContext(ModelContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/semester/create',data,{headers:{"Authorization":authHeader}}).then((response) => {
            changeMessage({message:response.data.message});
            navigate('/admin/semester');
        })
            .catch(err=>console.error(err))
    }

    return <SemesterForm  handleChange={handleChange} handleSubmit={handleSubmit} data={data}/>;
};

export default CreateSemesterController;
