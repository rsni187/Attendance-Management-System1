import Login from "../../pages/Auth/Login.jsx";
import {useContext, useEffect, useState} from "react";
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'
import {useNavigate} from "react-router-dom";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import AxiosConfig from "../../services/AxiosConfig.jsx";
import {ModelContext} from "../../Context/ModelContext.jsx";

const LoginController = () => {
    const [loginData,setLoginData] = useState({
        user:'',
        password:''
    });
    const [error,setError] = useState({
        status:false,
        message:''
    })
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


    const isAuthenticated = useIsAuthenticated()
    const navigation = useNavigate();
    const signIn = useSignIn();

    useEffect(() => {
        if(isAuthenticated()){
            navigation('/')
        }
    }, [isAuthenticated()]);


    if(!changeMessage){
        return ;
    }

    const submitAction = async(elem) =>{
        elem.preventDefault();
        if(!loginData.user || !loginData.password){
            setError({
                status: true,
                message:"Fields cannot be empty"
            })
            return ;
        }
        try{
        const response = await AxiosConfig().post('/users/login',loginData)
            if(signIn({
                             auth: {
                    token: response.data?.accessToken,
                    type: 'Bearer',
                    expiresAt: new Date('+12 Hours'),
                },
                userState: response.data.data
            }
            )
            ){
                changeMessage({message:"Login Successfull"})
                setTimeout(()=>navigation('/'),2000)
                //send the message here
                return ;
            }else {
                setError({
                    status: true,
                    message: "Something went wrong with the login"
                })
                return
            }
        }catch(error){
            console.log(error)
                setError({
                    status: true,
                    message: error?.response?.data?.error || "Unknown error occured"
                })
                return ;
        }
    }

    return <Login
        submitAction={submitAction}
        loginData={loginData}
        setLoginData={setLoginData}
        error={error}
        />


};

export default LoginController;
