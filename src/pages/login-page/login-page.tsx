import AppHeader from "../../containers/app-header/app-header";
import LoginCard from "../../containers/login-card/login-card";
import "./login-page.css"

export default function LoginPage(){
    return <div className="login-page">
        <AppHeader></AppHeader>
        <LoginCard></LoginCard>
    </div>
}