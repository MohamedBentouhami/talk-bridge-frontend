import axios from "axios";

const friendService = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Authorization": localStorage.getItem("token") || ""
    }
});

export async function fetchFriends(): Promise<any> {
    const response = await friendService.get<any[]>(`/friends/`);
    return response.data;
}


export async function getMessages(friendId: string) {
    const response = await friendService.get<any[]>(`/messages/${friendId}`)
    return response.data;
}