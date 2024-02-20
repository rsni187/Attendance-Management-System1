import FormInput from "../../components/FormInput.jsx";

const Profile = ({changePassword, setChangePassword,handleForm,error}) => {

    const handlePasswordChange = (val) => setChangePassword((e)=>({...e,password:val}))
    const handleCPasswordChange = (val) => setChangePassword((e)=>({...e,cpassword:val}))

    return (
        <div>
            <form onSubmit={handleForm} className={`border border-secondary rounded p-4`}>
                <fieldset>
                    <legend className={`mb-3 h1 text-center`}>Change Password</legend>
                    <FormInput
                        name={"password"}
                        label={`Password`}
                        type={`password`}
                        value={changePassword.password}
                        change={handlePasswordChange}
                        placeholder={`Enter your password`}
                    />
                    <FormInput
                        name={"cpassword"}
                        label={`Re-Enter Password`}
                        value={changePassword.cpassword}
                        type={`password`}
                        change={handleCPasswordChange}
                        placeholder={`Re-Enter your password`}
                    />

                    {error?.status && <p className={`mb-4 bg-danger text-light rounded px-4 py-2`}>{error?.message || ''}</p>}

                    <div className={`mb-4 w-100`}>
                        <button type="submit" className={`btn btn-light border w-100`}>Change</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Profile;
