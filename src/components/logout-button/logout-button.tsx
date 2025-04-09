import { LogOut } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
// import socket from "../../socket";
import "./logout-button.css"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import { deleteAll } from "../../store/friends/friend.action";

export default function LogoutButton() {
    const { t } = useTranslation();
    const navigation = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const handleLogout = () => {
        dispatch(deleteAll());
        const userId = localStorage.getItem("id");
        // socket.emit("logout", {userId});;
        localStorage.clear();
        navigation("/");
    }
    return <button className="logout-btn" onClick={handleLogout}>
        <LogOut />
        {t('menu.logout')}
    </button>
}