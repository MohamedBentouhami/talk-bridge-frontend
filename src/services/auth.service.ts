import axios from "axios";
import { formData } from "../@types/register-form-props";

const authService = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})
export async function login(email: string, password: string): Promise<any> {

    return await authService.post('/auth/login', {
        email, password
    });
}

export default async function signup(data: formData) {
    console.log(data);
    await authService.post('/auth/signup', {
        "first_name": data.firstName,
        "last_name": data.lastName,
        "email": data.email,
        "password": data.password,
        "birth_date": data.birthday,
        "native_language": data.nativeLanguage,
        "learning_language": data.targetLanguage,
        "bio": "None",
        "profile_pict": data.picture
    })
} 