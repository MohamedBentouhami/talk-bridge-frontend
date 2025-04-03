import axios from "axios";
import { User } from "../@types/user";

const userService = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Authorization": localStorage.getItem("token") || ""
    }
});

export async function fetchNewPartners(lg: string): Promise<User[]> {
    const response = await userService.get<User[]>(`/users/${lg}`);
    return response.data;
}
