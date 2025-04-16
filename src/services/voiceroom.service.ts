import axios from "axios";
import { Voiceroom } from "../@types/voiceroom";

const voiceroomService = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})


voiceroomService.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = token
    }
    return config;
})

export async function fetchVoiceroom() {
    const response = await voiceroomService.get("voicerooms/")
    return response.data;
}
export async function createVoiceRoom(title: string, lg: string) : Promise<Voiceroom> {
    const response = await voiceroomService.post("voicerooms/add", {
        title, lg
    })
    return response.data;
}
export async function joinVoiceroom(voiceroomId: string) : Promise<void> {
    await voiceroomService.patch("voicerooms/join", {
        voiceroomId
    })
   
}
