/* istanbul ignore file */
import axios from "axios";
import { BACKEND_URL } from "../../../constants";

const verify2facode = async (data) => {
    return axios({
        method: 'post',
        headers: { "Content-Type": "application/json" },
        url: `${BACKEND_URL}/verify2facode`,
        data,
    });
}

export default verify2facode;
