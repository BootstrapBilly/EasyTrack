/* istanbul ignore file */
import axios from "axios";
import { BACKEND_URL } from "../../../constants";

const signup = async (data) => {
    return axios({
        method: 'post',
        headers: { "Content-Type": "application/json" },
        url: `${BACKEND_URL}/signup`,
        data,
    });
}

export default signup;
