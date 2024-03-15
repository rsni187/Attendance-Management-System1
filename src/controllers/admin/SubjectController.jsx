import React, {useContext, useEffect, useState} from 'react';
import SubjectIndex from "../../pages/admin/subject/SubjectIndex.jsx";
import AxiosConfig from "../../services/AxiosConfig.jsx";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import {ModelContext} from "../../Context/ModelContext.jsx";

const SubjectController = () => {
    const [subject,setSubject] = useState({});
    const axios = AxiosConfig();
    const {changeMessage} = useContext(ModelContext);
    const [search,setSearch] = useState('');
    const authHeader = useAuthHeader();
    const handleSearch = (elem)=>{
        elem.preventDefault();
        const inputValue = elem.target.elements.search.value;
        setSearch(inputValue);
    }

    useEffect(()=>{
        if(search.length === 0){

        axios.get('/subject/all',{headers:{"Authorization":authHeader}}).then((response)=>{
            console.log(response)
            setSubject(response.data);
        })
         .catch((error)=>{console.error(error);})
        }else{
            axios.get(`/subject/search/${search}`,{headers:{"Authorization":authHeader}}).then((response)=>setSubject(response.data));
        }
    },[search])

    const deleteSubject =()=>{
        if(window.confirm('Are you sure you want to delete')){
            axios.post(`/subject/delete/${subject._id}`,'',{headers:{"Authorization":authHeader}})
         .then((response)=>{
                setSubject(response.data);
                changeMessage(response.data.message);
            })
         .catch((error)=>{console.error(error);})
        }
    }

    return <SubjectIndex deleteSubject={deleteSubject} subject={subject} handleSearch={handleSearch}  />;
};

export default SubjectController;
