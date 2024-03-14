import FacultyIndex from "../../pages/admin/faculty/FacultyIndex.jsx";
import {useContext, useEffect, useState} from "react";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import AxiosConfig from "../../services/AxiosConfig.jsx";
import {ModelContext} from "../../Context/ModelContext.jsx";

const FacultyController = () => {
    const form = {
        facultyName:""
    }
    const [faculty,setFaculty] = useState(form);
    const [search,setSearch] = useState('');
    const authHeader = useAuthHeader()
    const axios = AxiosConfig();
    const {changeMessage} = useContext(ModelContext);

    useEffect(()=>{
        if(search.length === 0){
            axios.get('/faculty/all').then((response)=>{
                setFaculty(response.data);
            })
                .catch((error)=>{console.error(error);})
        }else{
            axios.get(`faculty/search/${search}`,{headers:{"Authorization":authHeader}}).then((response)=>setFaculty(response.data));
        }
    },[search])

    const handleSearch = (elem)=>{
        elem.preventDefault();
        const inputValue = elem.target.elements.search.value;
        setSearch(inputValue);
    }
    function deleteFaculty(faculty){
        if(window.confirm('Are you sure you want to delete')){
            axios.post(`/faculty/delete/${faculty}`,'',{headers:{"Authorization":authHeader}})
                .then((dat)=>{
                    changeMessage({message:dat.data.message});
                    axios.get('/faculty/all').then((response)=>{
                        setFaculty(response.data);
                    })
                        .catch((error)=>{console.error(error);})
                })
                .catch((err)=>console.error(err))
        }
    }

    return <FacultyIndex faculty={faculty} handleSearch={handleSearch} deleteFaculty={deleteFaculty}/>;
};

export default FacultyController;
