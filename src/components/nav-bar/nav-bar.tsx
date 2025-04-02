import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./nav-bar.css"

export default function NavBar() {
    const { t } = useTranslation();

    return (
        <nav className="nav">
            <NavLink to="/dashboard">{t('menu.dashboard')}</NavLink>
            <NavLink to="/connect">{t('menu.connect')}</NavLink>
            <NavLink to="/voiceroom">{t('menu.voiceroom')}</NavLink>
            <NavLink to="/profile">{t('menu.profile')}</NavLink>
        </nav>
    );
}
