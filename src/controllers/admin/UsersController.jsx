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
    const activeUser = (id,active) =>{
        if(window.confirm('Are you sure you want to activate or deactivate user')){
            axios.put(`/users/activate/${id}`,{"active":!active},{headers:{"Authorization":authHeader}}).then((response)=>{
                changeMessage({message:response.data.message})
                axios.get('users/all',{headers:{"Authorization":authHeader}}).then((response)=>setUsers(response.data))
            }).catch(err=>changeMessage({message:"Please fill out the details of the student before activating the id"}))
        }
    }


    useEffect(()=>{
        if(!search.length>0){
            axios.get('users/all',{headers:{"Authorization":authHeader}}).then((response)=>setUsers(response.data))
        }else{
            axios.get(`users/search/${search}`,{headers:{"Authorization":authHeader}}).then((response)=>setUsers(response.data));
        }
    },[search]);

    return <User users={users} activeUser={activeUser} handleSearch={handleSearch} deleteUser={deleteUser} />;
};

export default UsersController;
