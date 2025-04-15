import AppHeader from "../../containers/app-header/app-header";
import RegisterCard from "../../containers/register-card/register-card";
import "./register-page.css"

export default function RegisterPage() {
    return <div className="register-page">
        <AppHeader></AppHeader>
        <RegisterCard></RegisterCard>
    </div>
}