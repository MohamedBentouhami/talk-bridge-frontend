export default function storeUserToken(response: any) {
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("id", response.data.user.id);
    localStorage.setItem("first_name", response.data.user.first_name);
    localStorage.setItem("last_name", response.data.user.last_name);
    localStorage.setItem("learning_language", response.data.user.learning_language)
}  