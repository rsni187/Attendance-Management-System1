import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import useSignOut from 'react-auth-kit/hooks/useSignOut';


function BasicAuth({children}){
    const isAuthenticated = useIsAuthenticated();
    const navigate = useNavigate()

    useEffect(() => {
        if(!isAuthenticated()){
            navigate('/');
        }
    }, []);

    return children

}

function StudentAuth({children}){
    const isAuthenticated = useIsAuthenticated();
    const auth = useAuthUser()
    const signOut = useSignOut()

    const navigate = useNavigate()

    useEffect(() => {
        if(!isAuthenticated()){
            navigate('/');
        }

        if(auth.role !== 'student'){
            signOut();
            navigate('/');
        }
    }, []);

    return children
}

function TeacherAuth({children}){
    const isAuthenticated = useIsAuthenticated();
    const auth = useAuthUser()
    const signOut = useSignOut()

    const navigate = useNavigate()

    useEffect(() => {
        if(!isAuthenticated()){
            navigate('/');
        }
        if(auth.role !== 'teacher'){
            signOut();
            navigate('/');
        }
    }, []);

    return children

}

function AdminAuth({children}){
    const isAuthenticated = useIsAuthenticated();
    const auth = useAuthUser()
    const signOut = useSignOut()

    const navigate = useNavigate()

    useEffect(() => {
        if(!isAuthenticated()){
            navigate('/');
        }
        if(auth.role !== 'admin'){
            signOut();
            navigate('/');
        }
    }, []);

    return children

}

export {BasicAuth,StudentAuth,TeacherAuth,AdminAuth}