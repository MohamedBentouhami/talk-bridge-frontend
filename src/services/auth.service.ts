import axios from "axios";

const authService = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})
export async function login(email: string, password: string) : Promise<any> {

    return await authService.post('/auth/login', {
        email, password
    });
}