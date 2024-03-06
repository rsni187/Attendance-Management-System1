import axios from "axios";
import { useEffect } from "react";



export default function AxiosConfig() {

    return axios.create({
        baseURL: 'http://localhost:5000',
        })
    
    }