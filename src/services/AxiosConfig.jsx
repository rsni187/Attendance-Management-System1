import axios from "axios";

export default function AxiosConfig() {
    return axios.create({
        baseURL: 'http://localhost:5000',

        })
    }