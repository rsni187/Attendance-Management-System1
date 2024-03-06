import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput.jsx";
import FormError from "../../components/FormError.jsx";

const Signup = ({ formData,handleSubmit,changeHandler,error,responseError }) => {
  
    return (
    <main>
      <form onSubmit={handleSubmit}>
      <fieldset className={`p-4 rounded mx-auto shadow-lg`}>

        <div className="row">
          <FormInput
            label="First Name:"
            name="firstName"
            value={formData.firstName}
            change={changeHandler}
            placeholder={`Enter your first name`}
            error={error.firstName}
          />
          <FormInput
            label="Middle Name:"
            type="text"
            name="middleName"
            change={changeHandler}
            value={formData.middleName}
            placeholder={`Enter your middle name`}
            error={error.middleName}
          />
          <FormInput
            label="Last Name:"
            type="text"
            name="lastName"
            value={formData.lastName}
            change={changeHandler}
            placeholder={`Enter your last name`}
            error={error.lastName}
          />
        </div>
        <div className="row">
          <FormInput
            label="Email:"
            type="email"
            name="email"
            value={formData.email}
            change={changeHandler}
            error={error.email}
            placeholder={`Enter your email address`}
          />
          <FormInput
            label="Username"
            name="username"
            change={changeHandler}
            value={formData.username}
            error={error.username}
            placeholder={`Enter your username`}
            />
            <FormInput
                label={`Date of Birth (DOB):`}
                name={`dob`}
                change={changeHandler}
                value={formData.dob}
                error={error.dob}
                type={`date`}
            />
        </div>
        <div className="row">
        <FormInput
            label="Phone Number:"
            name="phoneNumber"
            type={`number`}
            value={formData.phoneNumber}
            error={error.phoneNumber}
            change={changeHandler}
            placeholder={`Enter your phone number`}
          />
          <FormInput
            label="Address:"
            name="address"
            value={formData.address}
            change={changeHandler}
            error={error.address}
            placeholder={`Enter your address`}
          />
        </div>
        
        <div className="row">
        <FormInput
                label="Password:"
                name="password"
                value={formData.password}
                change={changeHandler}
                error={error.password}
                placeholder={`Enter password`}
          />
          <FormInput
                label="Re-Enter Password:"
                name="cpassword"
                value={formData.cpassword}
                change={changeHandler}
                error={error.cpassword}
                placeholder={`Re-enter password`}
          />
        </div>
        <div className="row mb-4">
            <div className="col">
            <button type="submit" className="btn btn-outline-primary w-100">
                Submit
            </button>
            </div>
        </div>
        {responseError && 
        <div className="row">
            <FormError>
            {responseError}
            </FormError>
        </div>
        }
        <div className="row">
            <div className="col">
            <p className="text-secondary text-small mb-2">Already have an account? <Link to={'/login'}>Click here</Link></p>
            </div>
        </div>
        </fieldset>
      </form>
    </main>
  );
};

export default Signup;
