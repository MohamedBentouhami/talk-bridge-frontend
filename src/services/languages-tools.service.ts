import axios from "axios";

const pronunciationService = axios.create({
    baseURL: import.meta.env.VITE_API_PRONUNCIATION_URL,
    headers: {
        "Content-Type": "application/json",
        "x-rapidapi-host": "thefluentme.p.rapidapi.com",
        "x-rapidapi-key": import.meta.env.VITE_API_PRONUNCIATION_KEY
    }
})

export async function getPronunciation(content: string, code: string) {
    const response = await pronunciationService.post("/post", {
        "post_language_id": code, "post_title": "My first post title", "post_content": content
    })
    return response.data.ai_reading;
}

export async function getTranslation(content: string, lg: string, target: string): Promise<string | undefined> {
    const baseURL = import.meta.env.VITE_API_URL;
    const response = await axios.post(baseURL + "tools/translate", { content, langpair: `${lg}|${target}` })
    return response.data;
}

export async function rephraseText(text: string, lg: string) {
    const baseURL = import.meta.env.VITE_API_URL;
    const response = await axios.post(`${baseURL}tools/rephrase`, {
        text, lg
    })

    return response.data;
}

export async function correctText(text: string, lg: string){
    const baseURL = import.meta.env.VITE_API_URL;
    const response = await axios.post(`${baseURL}tools/correction`, {
        text, lg
    })

    return response.data;
}