import React, {useContext, useEffect, useRef, useState} from 'react';
import Report from "../../pages/admin/Report.jsx";
import AxiosConfig from "../../services/AxiosConfig.jsx";
import {ModelContext} from "../../Context/ModelContext.jsx";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";

const ReportController = () => {
    const form = {
        subjectID:"",
        semesterID:"",
        startDate:"",
        endDate:""
    }
    const [data,setData] = useState(form)
    const [subject,setSubject] = useState({});
    const [semester,setSemester] = useState({});
    const authHeader = useAuthHeader();
    const downloadRef = useRef();
    const axios = AxiosConfig();
    const {changeMessage} = useContext(ModelContext);

    useEffect(()=>{
        axios.get('/subject/all').then(function (response){
            setSubject(response.data);
        }).catch((error)=>{console.error(error);})

        axios.get('/semester/all').then(function (response){
            setSemester(response.data);
        }).catch((error)=>{console.error(error);})
    },[])

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!data.subjectID){
            changeMessage({message:"Please select a subject and semester."})
        }
        let URI = "/attendance/generate";
        if(data.startDate && data.startDate){
            URI = "/attendance/generate/date";
            changeMessage({message:"Please select a starting date."})
        }
        axios.post(URI,data,{headers:{"Authorization":authHeader}}).then((response)=>{
            // changeMessage({message:response.data.message});
            console.log(response)
        }).catch(error=>console.error(error))
    }
    const clearDate=()=>{
        setData((dat)=>({
            ...dat,
            startDate:"",
            endDate:""
        }))
    }

    return <Report subject={subject} semester={semester} data={data} handleChange={handleChange} handleSubmit={handleSubmit} clearDate={clearDate} downloadRef={downloadRef}/>;
};

export default ReportController;
