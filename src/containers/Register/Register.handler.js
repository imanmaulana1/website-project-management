import axios from "axios";
import { BASE_URL } from "../../constants";

export const handleRegister = async (payload) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/register`, payload);
        return data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};
