import axios from "axios";
import { User } from "../@types/user";

const userService = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Authorization": localStorage.getItem("token")
    }
})

export type UsersRequest = {
    data: Array<{
        id: string;
        firstName: string;
        lastName: string;
    }>;
};


export async function fetchNewPartners(lg: string): Promise<User[]> {
    const response = await userService.get<any>(`/users/${lg}`);
    return response.data.map((user: any) => ({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName
    }));
}