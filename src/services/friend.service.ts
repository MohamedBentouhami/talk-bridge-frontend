import axios from "axios";
import { Person } from "../@types/person";
import type { Message } from "../@types/message";

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

export async function addFriendRequest(friendId: string): Promise<void> {
    await friendService.post<any[]>('/friends/add', {
        friend_id: friendId
    });

}

export async function acceptFriendRequest(friendId: string) {
    await friendService.patch<any[]>('/friends/accept', {
        friend_id: friendId
    })
}
export async function refuseFriendRequest(friendId: string) {
    await friendService.delete<any[]>('/friends/refuse', {
        data: { friend_id: friendId }
    })
}
export async function fetchMessages(friendId: string) {
    const response = await friendService.get<Message[]>(`/messages/${friendId}`)
    return response.data;
}

export async function sendMessage(friendId: string, message: string) {
    const response = await friendService.post<any[]>(`/messages/add`, {
        friend_id: friendId,
        message
    })
    return response.data;

}