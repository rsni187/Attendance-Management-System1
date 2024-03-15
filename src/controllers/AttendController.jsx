import AttendPage from "../pages/AttendPage.jsx";
import {useContext, useEffect, useState} from "react";
import AxiosConfig from "../services/AxiosConfig.jsx";
import {ModelContext} from "../Context/ModelContext.jsx";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import {useNavigate} from "react-router-dom";

const AttendController = () => {
    const [data,setData] = useState('');
    const [subject,setSubject] = useState({})
    const axios = AxiosConfig();
    const {changeMessage} = useContext(ModelContext);
    const authHeader = useAuthHeader();
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get('/subject/all').then(function (response){
            setSubject(response.data);
        }).catch((error)=>{console.error(error);})
    },[])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData(value);
    }

    function attendClass(elem){
        elem.preventDefault();
        axios.post(`/attendance/attend/${data}`,'',{headers:{"Authorization":authHeader}})
     .then(function (response){
            changeMessage({message:response.data.message});
            navigate('/');
         }
     )
    }

    return <AttendPage subject={subject} attendClass={attendClass} handleChange={handleChange}/>;
};

export default AttendController;