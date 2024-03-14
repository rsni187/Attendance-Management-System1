import FacultyForm from "../../pages/admin/faculty/FacultyForm.jsx";
import {useContext, useEffect, useState} from "react";
import AxiosConfig from "../../services/AxiosConfig.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {ModelContext} from "../../Context/ModelContext.jsx";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";

const EditFacultyController = () => {
    const form = {
        facultyName:''
    }
    const [data,setData] = useState(form);
    const {changeMessage} = useContext(ModelContext);
    const {id} = useParams();
    const axios = AxiosConfig();
    const navigate = useNavigate();
    const authHeader = useAuthHeader();
    useEffect(() => {
        axios.get(`/faculty/id/${id}`).then(function (response) {
            setData(response.data);
            console.log(response.data);
        }).catch((error) => {console.error(error)})
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({...data, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`/faculty/update/${id}`,data,{headers:{"Authorization":authHeader}})
         .then(function (response) {
                changeMessage({message:response.data.message});
                navigate('/admin/faculty');
            }).catch((error) => {console.error(error)})
    }

    return <FacultyForm handleChange={handleChange} data={data} handleSubmit={handleSubmit}/>;
};

export default EditFacultyController;
