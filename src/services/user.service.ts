import axios from "axios";
import { Person } from "../@types/person";

const userService = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

userService.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = token;
    }
    return config;
});

export async function fetchNewPartners(lg: string): Promise<Person[]> {
    const response = await userService.get<Person[]>(`/users/${lg}`);
    return response.data;
}
