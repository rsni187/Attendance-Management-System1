import React, {useContext, useEffect, useState} from 'react';
import SemesterIndex from "../../pages/admin/semester/SemesterIndex.jsx";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import AxiosConfig from "../../services/AxiosConfig.jsx";
import {ModelContext} from "../../Context/ModelContext.jsx";

const SemesterController = () => {
    const [semester,setSemester] = useState({});
    const [search,setSearch] = useState('');
    const authHeader = useAuthHeader()
    const axios = AxiosConfig();
    const {changeMessage} = useContext(ModelContext);

    useEffect(()=>{
        if(search.length === 0){
            axios.get('/semester/all').then((response)=>{
                setSemester(response.data);
            })
                .catch((error)=>{console.error(error);})
        }else{
            axios.get(`semester/search/${search}`,{headers:{"Authorization":authHeader}}).then((response)=>setFaculty(response.data));
        }
    },[search])

    const handleSearch = (elem)=>{
        elem.preventDefault();
        const inputValue = elem.target.elements.search.value;
        setSearch(inputValue);
    }
    function deleteSemester(faculty){
        if(window.confirm('Are you sure you want to delete')){
            axios.post(`/faculty/delete/${faculty}`,'',{headers:{"Authorization":authHeader}})
                .then((dat)=>{
                    changeMessage({message:dat.data.message});
                    axios.get('/faculty/all').then((response)=>{
                        setSemester(response.data);
                    })
                        .catch((error)=>{console.error(error);})
                })
                .catch((err)=>console.error(err))
        }
    }

    return <SemesterIndex deleteSemester={deleteSemester} handleSearch={handleSearch} semester={semester} />;
};

export default SemesterController;
