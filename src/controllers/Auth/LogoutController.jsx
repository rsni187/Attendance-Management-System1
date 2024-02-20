import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'
import {useNavigate} from "react-router-dom";
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import {useEffect} from "react";


const LogoutController = () => {
    const isAuthenticated = useIsAuthenticated()
    const navigate = useNavigate();
    const signOut = useSignOut()

    useEffect(()=>{
        if(!isAuthenticated()){
            navigate('/');
            return ;
        }

        signOut();
        navigate('/');
    },[])
};

export default LogoutController;
