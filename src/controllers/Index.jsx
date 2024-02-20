import Welcome from "../pages/Welcome.jsx";
import {useLayoutEffect} from "react";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import {useNavigate} from "react-router-dom";

export default function Home (){
    const isAuth = useIsAuthenticated()
    const auth = useAuthUser();
    const navigate = useNavigate();

    useLayoutEffect(() => {
        if(isAuth() && auth.role === "student"){
            navigate('/student/')
        }

        if(isAuth() && auth.role === "admin"){
            navigate('/admin/')
        }

        if(isAuth() && auth.role === "teacher"){
            navigate('/teacher/')
        }
    }, []);

    return (<Welcome/>)
}
