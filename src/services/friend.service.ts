import axios from "axios";

const friendService = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Authorization": localStorage.getItem("token") || ""
    }
});

export async function fetchFriends(lg: string): Promise<any> {
    const response = await friendService.get<any[]>(`/friends/${lg}`);
    return response.data;
}
