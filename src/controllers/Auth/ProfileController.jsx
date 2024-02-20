import Profile from "../../pages/Auth/Profile.jsx";
import {useContext, useEffect, useState} from "react";
import AxiosConfig from "../../services/AxiosConfig.jsx";
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import {ModelContext} from "../../Context/ModelContext.jsx";

const ProfileController = () => {
    const [changePassword,setChangePassword] = useState({
        password:'',
        cpassword:''
    });
    const [error,setError] = useState({
        status:false,
        message:''
    })

    const auth = useAuthUser();
    const authHeader = useAuthHeader()
    const {changeMessage} = useContext(ModelContext);

    useEffect(() => {

        const timer = setTimeout(()=>setError({
            status:false,
            message:''
        }),5000);


        return ()=>{
            clearTimeout(timer);
        }
    }, [error]);
    if(!changeMessage){
        return ;
    }
    const handleForm = async(e)=>{
        e.preventDefault();
        if(!changePassword.password || !changePassword.cpassword){
            setError({
                status: true,
                message:"Fields cannot be empty"
            })
            return ;
        }

        if(changePassword.password.length<8){
            setError({
                status: true,
                message:"Password must be at least 8 characters"
            })
            return ;
        }

        if(!(changePassword.password === changePassword.cpassword)){
            setError({
                status: true,
                message:"Passwords do not match"
            })
            return ;
        }

        try{
            const response = await AxiosConfig().put(`/users/update/${auth.userId}`,{'password':changePassword.password},{
                headers:{Authorization:authHeader}
            })
            changeMessage({message:response.data.message});
        }catch(err){
            console.log(err)

        }
    }

    return <Profile changePassword={changePassword} error={error} setChangePassword={setChangePassword} handleForm={handleForm}/>
};

export default ProfileController;
