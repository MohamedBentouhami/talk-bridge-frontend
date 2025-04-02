import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    const { t } = useTranslation();

    return (
        <nav>
            <NavLink to="/">{t('menu.home')}</NavLink>
            <NavLink to="/dashboard">{t('menu.dashboard')}</NavLink>
            <NavLink to="/connect">{t('menu.connect')}</NavLink>
            <NavLink to="/voiceroom">{t('menu.voiceroom')}</NavLink>
            <NavLink to="/profile">{t('menu.profile')}</NavLink>
        </nav>
    );
}
