import axios from "axios";
import { Person } from "../@types/person";

const friendService = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});


friendService.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = token;
    }
    return config;
});

export async function fetchFriends(): Promise<Person[]> {
    const response = await friendService.get<Person[]>(`/friends/`);
    return response.data;
}
export async function fetchRequesters(): Promise<Person[]> {
    const response = await friendService.get<Person[]>(`/friends/new-requesters`);
    return response.data;
}


export async function getMessages(friendId: string) {
    const response = await friendService.get<any[]>(`/messages/${friendId}`)
    return response.data;
}

export default async function addFriendRequest(friendId: string): Promise<void> {
    await friendService.post<any[]>('/friends/add', {
        friend_id: friendId
    });

}