import {useState} from "react";

const Signup = () => {
const [formData,setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        dob: "",
        phoneNumber: "",
        address: ""
    }
);
    return <Signup formData={formData} setFormData={setFormData}/>
};

export default Signup;
