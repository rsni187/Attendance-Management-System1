import {useContext, useEffect, useState} from 'react';
import SubjectForm from "../../pages/admin/subject/SubjectForm.jsx";
import {useNavigate, useParams} from "react-router-dom";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import AxiosConfig from "../../services/AxiosConfig.jsx";
import {ModelContext} from "../../Context/ModelContext.jsx";

const EditSubjectController = () => {
    const form = {
        name:"",
        code:"",
        courseId:"",
        userId:"",
        semesterId:""
    }

    const [data, setData] = useState(form);
    const [course,setCourse] = useState({});
    const [semester,setSemester] = useState({});
    const [teacher,setTeachers] = useState({});
    const authHeader = useAuthHeader();
    const {id} = useParams();

    const axios = AxiosConfig();
    const navigate = useNavigate();
    const {changeMessage} = useContext(ModelContext);

    useEffect(()=>{
        axios.get('/course/all').then(function (response){
            setCourse(response.data);
        }).catch((error)=>{console.error(error);})

        axios.get('/semester/all').then(function (response){
            setSemester(response.data);
        }).catch((error)=>{console.error(error);})

        axios.get('/users/all',{headers:{"Authorization":authHeader}})
            .then((response)=>{
                setTeachers(response.data)
            })
            .catch(err=>console.error(err))
        ;
        axios.get(`/subject/id/${id}`,{headers:{'Authorization':authHeader}}).then((response)=>{
            setData(response.data);
        }).catch(err=>console.error(err));
    },[])
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`/subject/update/${id}`,data,{headers:{"Authorization":authHeader}}).then(
            (response)=>{
                changeMessage({message:response.data.message});
                navigate('/admin/subject');
            }).catch(err=>console.error(err));

        if(data.startTime && data.endTime){
            const startTimeSplice = data.startTime.split(':');
            const endTimeSplice = data.endTime.split(':');
            let sendTimerData = {
                startTime:{"hour":startTimeSplice[0],"minute":startTimeSplice[1]},
                endTime:{"hour":endTimeSplice[1],"minute":endTimeSplice[1]}
            }
            axios.put(`subject/time/${id}`,sendTimerData,{headers:{"Authorization":authHeader}});
        }
    }

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    return <SubjectForm  handleChange={handleChange} handleSubmit={handleSubmit} data={data} course={course} semester={semester} teacher={teacher}/>;
};

export default EditSubjectController;
