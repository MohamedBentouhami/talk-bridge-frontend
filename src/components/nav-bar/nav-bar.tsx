import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./nav-bar.css"
import { Hammer, Handshake, MessageCircle, Mic, UserRound } from "lucide-react";
import LogoutButton from "../logout-button/logout-button";

export default function NavBar() {
    const { t } = useTranslation();
    return (
        <>
            <nav className="nav">
                <NavLink to="/chats"><MessageCircle />{t('menu.chats')}</NavLink>
                <NavLink to="/connect"><Handshake />{t('menu.connect')}</NavLink>
                <NavLink to="/voiceroom"><Mic />{t('menu.voiceroom')}</NavLink>
                <NavLink to="/tools"><Hammer />{t('menu.tools')}</NavLink>
                <NavLink to="/profile"><UserRound />{t('menu.profile')}</NavLink>
                <LogoutButton></LogoutButton>
            </nav>
        </>
    );
}
