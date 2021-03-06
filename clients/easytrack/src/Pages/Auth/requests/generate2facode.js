/* istanbul ignore file */
import axios from "axios";
import { BACKEND_URL } from "../../../constants";

const generate2facode = async (data) => {
    return axios({
        method: 'post',
        headers: { "Content-Type": "application/json" },
        url: `${BACKEND_URL}/generate2facode`,
        data,
    });
}

export default generate2facode;
