import React, {useContext, useEffect, useState} from 'react';
import CourseIndex from "../../pages/admin/course/CourseIndex.jsx";
import AxiosConfig from "../../services/AxiosConfig.jsx";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import {ModelContext} from "../../Context/ModelContext.jsx";

const CourseController = () => {

    const [course,setCourse] = useState({});
    const [search,setSearch] = useState("");
    const axios = AxiosConfig();
    const authHeader = useAuthHeader()
    const {changeMessage} = useContext(ModelContext);

    useEffect(()=>{
         if(search.length === 0){
        axios.get('/course/all').then((response)=>{
            setCourse(response.data);
        })
            .catch((error)=>{console.error(error);})
        }else{
            axios.get(`/course/search/${search}`,{headers:{"Authorization":authHeader}}).then((response)=>setCourse(response.data));
        }

    },[search])

    const handleSearch = (elem)=>{
        elem.preventDefault();
        const inputValue = elem.target.elements.search.value;
        setSearch(inputValue);
    }

    function deleteCourse(course){
        if(window.confirm('Are you sure you want to delete')){
            axios.post(`/course/delete/${course}`,'',{headers:{"Authorization":authHeader}})
             .then((dat)=>{
                    changeMessage({message:dat.data.message})
                })
             .catch((err)=>console.error(err))
        }
    }

    return <CourseIndex course={course} deleteCourse={deleteCourse} handleSearch={handleSearch}/>;
};

export default CourseController;
