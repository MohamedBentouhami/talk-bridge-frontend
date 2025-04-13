import { useTranslation } from "react-i18next";
import "./chat-container.css"

export default function NoChatContainer() {
    const { t } = useTranslation();
    const firstName = localStorage.getItem("first_name")
    const lastName = localStorage.getItem("last_name")
    return (
        <div className="no-chat-container">
            <h2>
                {t("chats.greeting", { firstName, lastName })}
            </h2>
            <p className="no-chat-text">{t('chats.noChatMessage')}</p>
        </div>
    );

}