import axios from "axios";
import { BASE_URL } from "../../constants";

export const fetchTasks = async (idProject, status) => {
    try {
        const { data } = await axios.get(
            `${BASE_URL}/boards/${idProject}/tasks?status=${status}`,
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

export const postTask = async (idProject, payload) => {
    try {
        const { data } = await axios.post(
            `${BASE_URL}/boards/${idProject}/tasks`,
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

export const removeTask = async (id) => {
    try {
        const { data } = await axios.delete(`${BASE_URL}/task/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const putTask = async (idProject, payload) => {
    try {
        const { data } = await axios.put(
            `${BASE_URL}/tasks/${idProject}`,
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

export const fetchDetailBoard = async (id) => {
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

export const fetchUser = async (value) => {
    try {
        const { data } = await axios.get(
            `${BASE_URL}/appusers?search=${value}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );
        return data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

export const inviteMember = async (idProject, idUser, payload) => {
    try {
        const { data } = await axios.post(
            `${BASE_URL}/boards/${idProject}/appusers/${idUser}`,
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
