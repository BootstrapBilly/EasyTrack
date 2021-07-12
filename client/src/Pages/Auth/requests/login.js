import axios from "axios";
import { BACKEND_URL } from "../../../constants";

const login = async (data) => {
    // add try catch for error handling here
    return axios({
        method: 'post',
        headers: { "Content-Type": "application/json" },
        url: `${BACKEND_URL}/login`,
        data,
    });
}

export default login;
