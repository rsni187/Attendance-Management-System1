import {useContext, useEffect, useState} from "react";
import AxiosConfig from "../../services/AxiosConfig";
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import User from "../../pages/admin/User";
import {ModelContext} from "../../Context/ModelContext.jsx";

const UsersController = () => {
    const [users,setUsers]= useState({});
    const [search,setSearch]= useState('');
    const authHeader = useAuthHeader();
    const {changeMessage} = useContext(ModelContext);
    const axios = AxiosConfig();

    const handleSearch = (elem)=>{
        elem.preventDefault();
        const inputValue = elem.target.elements.search.value;
        setSearch(inputValue);
    }

    const deleteUser = (userId) => {
        if(window.confirm('Are you sure you want to delete')){
            axios.put(`/users/delete/${userId}`,'',{headers:{"Authorization":authHeader}})
            .then((dat)=>{
                console.log(dat.data.message);
                changeMessage({message:dat.data.message});
            })
            ;
        }
    };
  

    useEffect(()=>{
        if(!search.length>0){
            axios.get('users/all',{headers:{"Authorization":authHeader}}).then((response)=>setUsers(response.data))
        }else{
            axios.get(`users/search/${search}`,{headers:{"Authorization":authHeader}}).then((response)=>setUsers(response.data));
        }
    },[users,search]);

    return <User users={users} handleSearch={handleSearch} deleteUser={deleteUser} />;
};

export default UsersController;
