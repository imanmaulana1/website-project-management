import axios from "axios";
import { BASE_URL } from "../../constants";

export const fetchBoards = async () => {
    try {
        const { data } = await axios.get(`${BASE_URL}/appusers/boards`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchSingleBoard = async (id) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/boards/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchUser = async () => {
    try {
        const { data } = await axios.get(`${BASE_URL}/appusers`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const postBoard = async (payload) => {
    try {
        const { data } = await axios.post(
            `${BASE_URL}/appusers/boards`,
            payload,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const putBoard = async (payload) => {
    try {
        const { data } = await axios.put(
            `${BASE_URL}/boards/${payload.id}`,
            payload,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const removeBoard = async (id) => {
    try {
        const { data } = await axios.delete(`${BASE_URL}/boards/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};
