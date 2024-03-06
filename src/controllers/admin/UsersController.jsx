import { useEffect, useState } from "react";
import AxiosConfig from "../../services/AxiosConfig";
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import User from "../../pages/admin/User";

const UsersController = () => {
    const [users,setUsers]= useState({});
    const [search,setSearch]= useState({});
    const authHeader = useAuthHeader();
    const axios = AxiosConfig();

    const handleSearch = (elem)=>{
        elem.preventDefault();
        const inputValue = elem.target.elements.search.value; 
        axios.get(`http://localhost:5000/users/search/${inputValue}`,{headers:{"Authorization":authHeader}}).then((data)=>{
        setUsers(data.data);
        }).catch((err)=>console.error(err));
    }

    const deleteUser = (user) => {
        if(window.confirm('Are you sure you want to delete')){
            axios.get('http://localhost:5000/users/search/',{headers:{"Authorization":authHeader}})
            .then(()=>console.log(''))
            ;
        }
    };
  

    useEffect(()=>{
        if(user.length > 0){
            axios.get('users/all',{headers:{"Authorization":authHeader}}).then((response)=>setUsers(response.data))
        }
    },[users,search]);

    return <User users={users} handleSearch={handleSearch} deleteUser={deleteUser} />;
};

export default UsersController;
