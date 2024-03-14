import EditUser from "../../pages/admin/EditUser.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import AxiosConfig from "../../services/AxiosConfig.jsx";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import {ModelContext} from "../../Context/ModelContext.jsx";

function EditUserController() {
    const values = {
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        cpassword: "",
        dob: "",
        phoneNumber: "",
        address: "",
    };

    const [userData, setUserData] = useState(values);
    const [error,setError]=useState(values);
    const axios = AxiosConfig();
    const authHeader = useAuthHeader();
    const {changeMessage} = useContext(ModelContext);
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        if(!id){
            navigate('/admin/users');
        }
        axios.get(`/users/id/${id}`,{headers:{'Authorization':authHeader}})
            .then((dat)=> {
                setUserData(dat.data);
            })
            .catch((err)=>{
                console.error(err)
                navigate('/admin/users')
            })
        ;

    },[id])

    const handleChange = (inputElem)=>{
        setUserData((dat)=>({...dat,[inputElem.target.name]:[inputElem.target.value]}));
    }

    const handleSubmit=(elem)=>{
        elem.preventDefault();
        axios.put(`/users/update/${id}`,userData,{headers:{"Authorization":authHeader}})
            .then((dat)=>{
                changeMessage({message:dat.data.message});
            })
            .catch((err)=>console.error(err))
    }

    return <EditUser userData={userData} handleChange={handleChange} handleSubmit={handleSubmit} error={error}/>;
}

export default EditUserController;