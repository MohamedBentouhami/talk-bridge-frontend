import { LogOut } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { deleteAll } from "../../store/friends/friend.action";
import "./logout-button.css"
import { deleteAllMessages } from "../../store/messages/message.action";

export default function LogoutButton() {
    const { t } = useTranslation();
    const navigation = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const handleLogout = () => {
        localStorage.clear();
        navigation("/", { replace: true });

        setTimeout(() => {
            dispatch(deleteAll());
            dispatch(deleteAllMessages())
        }, 100);
    }
    return <button className="logout-btn" onClick={handleLogout}>
        <LogOut />
        {t('menu.logout')}
    </button>
}