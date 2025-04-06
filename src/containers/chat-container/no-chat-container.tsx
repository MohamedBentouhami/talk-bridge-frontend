import { useTranslation } from "react-i18next";
import "./no-chat-container.css";

export default function NoChatContainer() {
    const {t} = useTranslation();
    return (
        <div className="no-chat-container">
            <p className="no-chat-text">{t('chats.noChatMessage')}</p>
        </div>
    );

}