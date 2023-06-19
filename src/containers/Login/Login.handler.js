import axios from "axios";
import { BASE_URL } from "../../constants";

export const handleLogin = async (payload) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/login`, payload);
        localStorage.setItem("token", data.token);
        return data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};
