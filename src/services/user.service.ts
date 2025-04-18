import axios from "axios";
import { Person } from "../@types/person";
import { editForm } from "../@types/edit-form";

const userService = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

userService.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = token;
    }
    return config;
});

export async function fetchNewPartners(): Promise<Person[]> {
    const response = await userService.get<Person[]>(`/users/partners`);
    return response.data;
}


export async function getUserInfo(): Promise<Person> {
    const response = await userService.get('/users');
    return response.data;
}

export async function updateUser(editForm: editForm) {
    await userService.patch('/users/update', {
        "first_name": editForm.firstName,
        "last_name": editForm.lastName,
        "native_language": editForm.nativeLg.toLowerCase(),
        "learning_language": editForm.targetLg.toLowerCase(),
        "bio": editForm.bio,
        "profile_pict": editForm.picture
    }, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })
}