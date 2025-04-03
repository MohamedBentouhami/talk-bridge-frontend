import { useTranslation } from "react-i18next"
import "./welcome.css"
import { useNavigate } from "react-router-dom";

export default function Welcome() {
    const navigate = useNavigate();
    const handleGetStarted = async () => {
        await navigate("/register")
    }
    const handleHaveAccount = async () => {
        await navigate("/login")
    }
    const { t } = useTranslation();
    return (<div className="welcome-container">
        <h1 className="title">{t('home.title')}</h1>
        <p className="intro">{t('home.intro')}</p>
        <div>
            <button className="start-btn" onClick={handleGetStarted}>{t('home.get-start')}</button>
            <button className="start-btn" onClick={handleHaveAccount}>{t('home.have-account')}</button>
        </div>
    </div>)
}  