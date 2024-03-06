import { useContext, useEffect, useState } from "react";
import Signup from "../../pages/Auth/Signup";
import {useNavigate} from "react-router-dom";
import AxiosConfig from "../../services/AxiosConfig";
import { ModelContext } from "../../Context/ModelContext";

const SignupController = () => {
  const values = {
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    cpassword: "",
    dob: "",
    phoneNumber: "",
    address: "",
  };
  const [formData, setFormData] = useState(values);
  const [error, setError] = useState(values);
  const [responseError, setResponseError] = useState(null);
    const navigation = useNavigate();
  const { changeMessage } = useContext(ModelContext);

  //input handler for the forms
  const changeHandler = (elem) => {
    setFormData((e) => ({ ...e, [elem.target.name]: elem.target.value }));
  };

  //form submiting function for the form
  const handleSubmit = async (elem) => {
    elem.preventDefault();

    //checking if all the fields are valid or not
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    for (const key in formData) {
      if (key === "middleName") {
        continue;
      }
      if (!formData[key]) {
        setError((e) => ({ ...e, [key]: "This field is required!" }));
      }
      if(key === "email" && !emailRegex.test(formData[key])) {
          setError((e) => ({...e, [key]: "Invalid email!" }));
      }
    }

    //checking if the password matches or not
    if (formData.password !== formData.cpassword) {
      setError((e) => ({
        ...e,
        password: "Passwords do not match",
        cpassword: "Passwords do not match",
      }));
    }

    //checking if any error occurres becore submitting the form
    for (const keys in error) {
      if (error[keys]) {
        return;
      }
    }

    //sending the request to the server
    try {
      const response = await AxiosConfig().post("/users/signup", formData);
        changeMessage({ message: response.data.message });
        navigation('/');
    } catch (err) {
      setResponseError(err.response?.data?.message);
    }
  };

  useEffect(()=>{
    let timer = null
    for(const key in error){
      if(error[key]){
        timer = setTimeout(()=>{
          setError(values);
        },3000)
      }
    }
    return clearTimeout(timer);
  },[error])

  return (
    <Signup
      formData={formData}
      handleSubmit={handleSubmit}
      changeHandler={changeHandler}
      responseError={responseError}
      error={error}
    />
  );
};

export default SignupController;
