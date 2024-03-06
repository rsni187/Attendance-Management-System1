import Style from './Login.module.css'
import FormInput from "../../components/FormInput.jsx";
import FormError from "../../components/FormError.jsx";
import { Link } from 'react-router-dom';
const Login = ({submitAction,loginData,setLoginData,error}) => {
    const changeHandler = (val)=>{
        setLoginData((elem)=>({...elem,[val.target.name]:val.target.value}))
    }

    return (
        <main className={`container-fluid ${Style.login_wrapper}`}>
                <form
                    className={`row w-100  `}
                    onSubmit={submitAction}
                >
                    <fieldset className={`col-lg-4 p-4 col  rounded mx-auto shadow-lg`}>
                    <FormInput
                        name={`user`}
                        label={`Username or Email:`}
                        value={loginData.user || ''}
                        change={changeHandler}
                        placeholder={`Enter your username or enail`}
                    />

                    <FormInput
                        name={`password`}
                        type="password"
                        label={`Password:`}
                        value={loginData?.password || ''}
                        change={changeHandler}
                        placeholder={`Enter your password`}
                    />
                        {error?.status && <FormError>{error.message}</FormError>}
                    <div className={`mb-4 col`}>
                        <button className={`btn btn-outline-primary w-100 `}>Login</button>
                    </div>
                    <p className={`text-secondary text-small mb-2`}>Dont have an account yet? <Link to={"/signup"}>Click here</Link></p>
                        <p className={`text-secondary text-small `}>If the account is not active, Please contact the administrator!</p>
                    </fieldset>

                </form>
        </main>
    );
};

export default Login;
