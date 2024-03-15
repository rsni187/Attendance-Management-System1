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
        facultyId:"",
        courseId:"",
        semesterId:""
    };

    const [userData, setUserData] = useState(values);
    const [faculty,setFaculty] = useState({})
    const [course,setCourse] = useState({});
    const [semester,setSemester] = useState({});
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
        axios.get('/faculty/all').then(function (response){
            setFaculty(response.data);
        }).catch((error)=>{console.error(error);})

        axios.get('/course/all').then(function (response){
            setCourse(response.data);
        }).catch((error)=>{console.error(error);})

        axios.get('/semester/all').then(function (response){
            setSemester(response.data);
        }).catch((error)=>{console.error(error);})
    },[id])

    const handleChange = (inputElem)=>{
        setUserData((dat)=>({...dat,[inputElem.target.name]:[inputElem.target.value]}));
    }

    const handleSubmit=(elem)=>{
        elem.preventDefault();
        axios.put(`/users/update/${id}`,userData,{headers:{"Authorization":authHeader}})
            .then((dat)=>{
                changeMessage({message:dat.data.message});
                if(userData.role){
                    const data = {role:userData.role}
                    if(userData.role === "admin"){
                        axios.put(`/users/change/admin/${id}`,data,{headers:{"Authorization":authHeader}})

                    }
                    if(userData.role === "teacher"){
                        axios.put(`/users/update/${id}`,data,{headers:{"Authorization":authHeader}})

                    }

                    if(userData.role === "student"){
                    axios.put(`/change/from/teacher/${id}`,data,{headers:{"Authorization":authHeader}})

                    }
                }
                if(userData.facultyId && userData.courseId && userData.semesterId){
                    const data = {
                        facultyId:userData.facultyId,
                        courseId:userData.courseId,
                        semesterId:userData.semesterId
                    }
                    axios.put(`/users/faculty/assign/${id}`,data,{headers:{"Authorization":authHeader}}).then(
                        response=>{
                            changeMessage({message:response.data.message});
                        }
                    ).catch(err=>console.error(err))
                }
            })
            .catch((err)=>console.error(err))
    }

    return <EditUser userData={userData} handleChange={handleChange} handleSubmit={handleSubmit} error={error} semester={semester} course={course} faculty={faculty}/>;
}

export default EditUserController;