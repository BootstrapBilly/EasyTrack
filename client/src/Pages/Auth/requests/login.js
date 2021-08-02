/* istanbul ignore file */
import axios from "axios";
import { BACKEND_URL } from "../../../constants";

const login = async (data) => {
    return axios({
        method: 'post',
        headers: { "Content-Type": "application/json" },
        url: `${BACKEND_URL}/login`,
        data,
        withCredentials: true,
    });
}

export default login;
