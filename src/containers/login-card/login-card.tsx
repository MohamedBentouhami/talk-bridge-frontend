import React, { useState } from "react";
import "./login-card.css";
import { useTranslation } from "react-i18next"
import { login } from "../../services/auth.service";
import Loader from "../../components/loader/loader";
import { useNavigate } from "react-router-dom";
// import socket from "../../socket";
import storeUserToken from "../../utils/handle-local-storage/handle-local-storage";

export default function LoginCard() {
    const { t } = useTranslation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e: React.MouseEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await login(email, password);
            storeUserToken(response);
            navigate("/chats", { replace: true })
        } catch (error: any) {
            console.log(error);
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    return <form className="login-form">
        <h1>{t('login.login')}</h1>
        <div className="div-input">

            <label>
                {t('login.email')}
            </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="div-input">
            <label>
                {t('login.password')}
            </label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {isLoading ? <div className="div-loader">
            <Loader />
        </div>
            : <button onClick={handleLogin}>{t('login.login')}</button>}

        <p className="register-link">
            {t('login.no-account')}
            <a href="/register"> {t('login.register')}</a></p>
    </form>

}