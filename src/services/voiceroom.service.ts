import axios from "axios";

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

export default async function fetchVoiceroom() {
    const response = await voiceroomService.get("voicerooms/")
    return response.data;
}