import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";
import "./nav-bar.css"
import { Handshake, LayoutDashboard, LogOut, Mic, UserRound } from "lucide-react";

export default function NavBar() {
    const { t } = useTranslation();
    const navigation = useNavigate();
    const handleLogout = () =>{
        localStorage.setItem("token", "");
        navigation("/");
    }
    return (
        <>
            <nav className="nav">
                <NavLink to="/dashboard"><LayoutDashboard />{t('menu.dashboard')}</NavLink>
                <NavLink to="/connect"><Handshake />{t('menu.connect')}</NavLink>
                <NavLink to="/voiceroom"><Mic />{t('menu.voiceroom')}</NavLink>
                <NavLink to="/profile"><UserRound />{t('menu.profile')}</NavLink>
                <button className="logout-btn" onClick={handleLogout}>
                    <LogOut />
                    {t('menu.logout')}
                </button>
            </nav>
        </>
    );
}
