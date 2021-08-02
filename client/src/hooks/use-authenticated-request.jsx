import axios from "axios";
import { useSelector } from 'react-redux';
import { BACKEND_URL } from "../constants";

const useAuthenticatedRequest = () => {
    const { jwt, userId } = useSelector((state) => state.auth);

    const sendRequest = async (url, data) => {
        return axios({
            method: 'post',
            headers: { 
                "Content-Type": "application/json",
                Authorization: `bearer ${jwt}`
            },
            url: `${BACKEND_URL}/${url}`,
            data: {...data, userId},
        });
    }
    return { sendRequest };
}

export default useAuthenticatedRequest;
