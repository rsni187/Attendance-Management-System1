import Style from './Login.module.css'
import FormInput from "../../components/FormInput.jsx";
import FormError from "../../components/FormError.jsx";
const Login = ({submitAction,loginData,setLoginData,error}) => {
    const userInput = (val)=>{
        setLoginData((elem)=>({...elem,user:val}))
    }
    const passwordInput = (val)=>{
        setLoginData((elem)=>({...elem,password:val}))
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
                        change={userInput}
                        placeholder={`Enter your username or enail`}
                    />

                    <FormInput
                        name={`password`}
                        type="password"
                        label={`Password:`}
                        value={loginData?.password || ''}
                        change={passwordInput}
                        placeholder={`Enter your password`}
                    />
                        {error?.status && <FormError message={error.message}/>}
                    <div className={`mb-4 col-lg-6 col-12 d-block mx-auto`}>
                        <button className={`btn btn-light w-100 border border-secondary shadow-lg`}>Login</button>
                    </div>
                        <p className={`text-secondary text-small `}>For an account please contact an administrator!</p>
                    </fieldset>

                </form>
        </main>
    );
};

export default Login;
