import { LogOut } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import socket from "../../socket";
import "./logout-button.css"

export default function LogoutButton() {
    const { t } = useTranslation();
    const navigation = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        const userId = localStorage.getItem("id");
        socket.emit("logout", {userId});;
        navigation("/");
    }
    return <button className="logout-btn" onClick={handleLogout}>
        <LogOut />
        {t('menu.logout')}
    </button>
}